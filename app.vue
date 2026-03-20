<template>
  <div class="app-wrapper">
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'cube', mode: '' }" />
    </NuxtLayout>
  </div>
</template>

<script setup>
  // const { fetchUser } = useAuth();

  // // Fetch user on app start (server & client)
  // await callOnce(async () => {
  //   await fetchUser();
  // });
</script>
