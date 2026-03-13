<template>
  <footer class="bg-gray-900 text-white border-t border-gray-800 pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Logo & Description -->
        <div>
          <NuxtLink :to="localePath('/')" class="inline-block mb-6">
            <img
              src="/images/nav-logo.png"
              alt="Vitergy Residense"
              class="h-8 w-auto filter brightness-0 invert"
            />
          </NuxtLink>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            {{ $t('index.welcome') }}
          </p>
          <div class="flex gap-4">
            <!-- Social placeholders -->
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-6 text-green-500">Бързи Връзки / Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in mainNavLinks" :key="link.to">
              <NuxtLink
                :to="localePath(link.to)"
                class="text-gray-400 hover:text-white transition"
              >
                {{ $t(link.labelKey) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Buildings -->
        <div>
          <h3 class="text-lg font-bold mb-6 text-green-500">{{ $t('nav.buildings') }}</h3>
          <ul class="space-y-3">
            <li v-for="subLink in mainNavLinks.find(l => l.to === '/sgradi')?.submenuItems" :key="subLink.to">
              <NuxtLink
                :to="localePath(subLink.to)"
                class="text-gray-400 hover:text-white transition"
              >
                {{ $t(subLink.labelKey) }}{{ subLink.labelSuffix }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="text-lg font-bold mb-6 text-green-500">Информация / Information</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="/kontakti"
                class="text-gray-400 hover:text-white transition"
              >
                {{ $t('nav.contact') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/za-nas"
                class="text-gray-400 hover:text-white transition"
              >
                {{ $t('nav.about') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        <p>
          &copy; {{ new Date().getFullYear() }} Vitergy Residense. {{ $t('footer.rights') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { mainNavLinks } from '~/utils/navigation'
const localePath = useLocalePath()
</script>
