# PrimeWin Deployment Guide (Ubuntu 22.04)

This guide covers the initial server setup, SSH key generation for GitHub, installing dependencies (Node.js 22, PM2, MongoDB 6), configuring Nginx, and setting up SSL via Let's Encrypt.

## 1. Initial Setup & SSH Key (For GitHub)

Once you log into your droplet via SSH (`ssh root@your_server_ip`), generate an SSH key to authenticate with GitHub.

```bash
# Generate the SSH key (press Enter to accept default path and skip passwords if you want)
# Note: The email here is just a label so you know whose key it is. Use your actual GitHub email.
ssh-keygen -t ed25519 -C "gantonovfe@gmail.com"

# Read the generated public key and copy the output
cat ~/.ssh/id_ed25519.pub
```

**Action:** Go to your GitHub repository -> Settings -> Deploy keys (or your personal GitHub account Settings -> SSH and GPG keys) -> Add New SSH Key and paste the output.

## 2. Clone the Repository

You mentioned you want the project in `/srv`.

```bash
cd /srv
# Replace the URL with your actual GitHub SSH clone URL
git clone git@github.com:yourusername/primewin.git
cd primewin
```

## 3. Install Dependencies (Node.js 22, MongoDB, PM2, Nginx, Certbot)

Run the following commands to install the required software.

### Update System & Install Nginx and Certbot

```bash
apt update && apt upgrade -y
apt install nginx certbot python3-certbot-nginx -y
```

### Install MongoDB 6.0

Ubuntu 22.04 doesn't have MongoDB 6 in default repos. Add the official MongoDB repo:

```bash
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg --dearmor

echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

apt update
apt install -y mongodb-org

# Start and enable MongoDB on boot
systemctl start mongod
systemctl enable mongod
```

### Install Node.js 22

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
apt install -y nodejs
```

### Install PM2 (Process Manager)

```bash
npm install -g pm2
```

## 4. Build and Start the Application

Nuxt 3 builds are very memory intensive. If you are on a smaller droplet (like 1GB or 2GB RAM), the build will fail with a "JavaScript heap out of memory" error. You MUST add a swap file first.

### Create a 2GB Swap File (Run this if you haven't already)
```bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab
```

### Build the App
Assuming you are inside `/srv/primewin`:

```bash
# Install project dependencies
npm install

# Build the Nuxt application for production
# If on Linux (Droplet), run this first to allow more RAM usage:
export NODE_OPTIONS="--max-old-space-size=4096"

# Then run the build normally
npm run build
```

Now, start the application using PM2. Nuxt 3 built output creates an entry point at `.output/server/index.mjs`.

```bash
# Start the app
pm2 start .output/server/index.mjs --name "primewin"

# Save the PM2 list so it restarts automatically on server reboots
pm2 save
pm2 startup
# (Run the command PM2 spits out at the end of `pm2 startup`)
```

## 5. Configure Nginx

You have a `default.nginx` file in the root of your project. You need to copy this to Nginx's configuration directory, enable it, and restart Nginx.

```bash
# Remove default nginx config
rm /etc/nginx/sites-enabled/default

# Copy your config from the repo
cp /srv/primewin/default.nginx /etc/nginx/sites-available/primewin.eu

# Create a symlink to enable it
ln -s /etc/nginx/sites-available/primewin.eu /etc/nginx/sites-enabled/

# Test the config to make sure there are no typos
nginx -t

# Restart Nginx
systemctl restart nginx
```

_Note on WWW CNAME:_ Even if your DNS provider points `www` to `@` using a CNAME, the browser still sends the "Host: www.primewin.eu" header to your server. Therefore, Nginx _must_ be configured to listen for both domains. The provided `default.nginx` handles this gracefully.

## 6. Setup SSL (HTTPS) with Let's Encrypt

Because you pointed your Name Servers to Digital Ocean and your domain resolves to this Droplet, setting up SSL is fully automated with Certbot.

```bash
certbot --nginx -d primewin.eu -d www.primewin.eu
```

Certbot will ask for your email and read the Nginx configuration. It will automatically apply the SSL certificates to the Nginx config file and reload Nginx.

Say yes to "Redirect all HTTP traffic to HTTPS" if prompted.

### 7. Verify SSL Auto-Renewal
Let's Encrypt certificates expire every 90 days. Certbot automatically adds a timer to your system when you install it to handle this for you.

To verify that the auto-renewal service is active, run:
```bash
systemctl list-timers | grep certbot
```

To test if the renewal process will work without actually updating the certificate, you can run a "dry run":
```bash
certbot renew --dry-run
```

If the dry run finishes without errors, your site will stay secure forever!

### Done!

Your website should now be live at `https://primewin.eu`.
