<template>
  <nav
    class="app-nav fixed flex items-center bg-darkSecond h-[90px] top-0 left-0 right-0 z-10 text-white"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between lg:justify-center gap-8">
        <NuxtLink
          :to="localePath('/')"
          class="flex-shrink-0"
        >
          <img
            src="/images/nav-logo.png"
            alt="logo"
            class="h-[25px] mb-[5px] md:mb-0 md:h-auto w-auto"
          />
        </NuxtLink>

        <div class="hidden lg:flex items-center justify-center flex-1 gap-6">
          <template
            v-for="link in mainNavLinks"
            :key="link.to"
          >
            <template v-if="!link.hasSubmenu">
              <NuxtLink
                :to="localePath(link.to)"
                class="hover:text-green-500 font-medium"
              >
                {{ $t(link.labelKey) }}
              </NuxtLink>
            </template>
            <AppDropdownDesktop v-else>
              <template #trigger="{ isHovered }">
                <NuxtLink
                  :to="localePath(link.to)"
                  class="hover:text-green-500 font-medium inline-flex items-center gap-1 py-4"
                >
                  {{ $t(link.labelKey) }}
                  <Icon
                    name="material-symbols:keyboard-arrow-down"
                    class="w-4 h-4 transition-transform duration-200"
                    :class="{ 'rotate-180': isHovered }"
                  />
                </NuxtLink>
              </template>
              <template #content="{ close }">
                <NuxtLink
                  v-for="subLink in link.submenuItems"
                  :key="subLink.to"
                  @click="close"
                  :to="localePath(subLink.to)"
                  class="px-4 py-3 hover:bg-gray-800 hover:text-green-500 transition-colors whitespace-nowrap"
                >
                  {{ $t(subLink.labelKey) }}{{ subLink.labelSuffix || '' }}
                </NuxtLink>
              </template>
            </AppDropdownDesktop>
          </template>
        </div>

        <div class="hidden lg:flex items-center">
          <button
            @click="toggleLanguage"
            class="flex items-center gap-2 hover:opacity-80 transition-opacity bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700"
          >
            <Icon
              :name="langIcon"
              class="w-5 h-5 rounded-full object-cover"
            />
            <span class="text-sm font-bold uppercase tracking-wider">
              {{ nextLang }}
            </span>
          </button>
        </div>

        <button
          class="h-[3rem] w-[3rem] mr-[-8px] lg:hidden bg-transparent flex items-center justify-center rounded-sm"
          @click="mobileOpened = !mobileOpened"
        >
          <Icon
            v-if="!mobileOpened"
            name="material-symbols:menu-rounded"
            class="h-[2rem] w-[2rem]"
          />
          <Icon
            v-else
            name="material-symbols:close"
            class="h-[2rem] w-[2rem]"
          />
        </button>
      </div>
    </div>

    <aside
      v-show="mobileOpened"
      class="fixed top-[90px] h-[calc(100vh-90px)] left-0 right-0 bottom-0 bg-dark text-white z-40 overflow-y-auto"
    >
      <div
        class="container mx-auto px-4 py-8 flex flex-col gap-6 text-center text-xl font-bold"
      >
        <template
          v-for="link in mainNavLinks"
          :key="link.to"
        >
          <template v-if="!link.hasSubmenu">
            <NuxtLink
              @click="mobileOpened = false"
              :to="localePath(link.to)"
              class="hover:text-green-500"
            >
              {{ $t(link.labelKey) }}
            </NuxtLink>
          </template>
          <AppDropdownMobile v-else>
            <template #trigger>
              <NuxtLink
                @click="mobileOpened = false"
                :to="localePath(link.to)"
                class="hover:text-green-500"
              >
                {{ $t(link.labelKey) }}
              </NuxtLink>
            </template>
            <template #content="{ close }">
              <NuxtLink
                v-for="(subLink, idx) in link.submenuItems"
                :key="subLink.to"
                @click="
                  () => {
                    mobileOpened = false
                    close()
                  }
                "
                :to="localePath(subLink.to)"
                class="hover:text-green-500 pb-2"
                :class="{
                  'border-b border-gray-800':
                    idx !== link.submenuItems.length - 1,
                }"
              >
                {{ $t(subLink.labelKey) }}{{ subLink.labelSuffix || '' }}
              </NuxtLink>
            </template>
          </AppDropdownMobile>
        </template>

        <div class="mt-8 pt-8 border-t border-gray-800 flex justify-center">
          <button
            @click="toggleLanguage"
            class="flex items-center gap-3 hover:opacity-80 transition-opacity bg-gray-800 px-6 py-3 rounded-full"
          >
            <Icon
              :name="langIcon"
              class="w-6 h-6 rounded-full"
            />
            <span
              class="text-lg font-bold uppercase tracking-widest text-gray-200"
            >
              {{ nextLang }}
            </span>
          </button>
        </div>
      </div>
    </aside>
  </nav>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { mainNavLinks } from '~/utils/navigation'

  const { locale, setLocale } = useI18n()
  const localePath = useLocalePath()

  const mobileOpened = ref(false)

  const nextLang = computed(() => (locale.value === 'bg' ? 'en' : 'bg'))
  const langIcon = computed(() =>
    locale.value === 'bg' ? 'circle-flags:en' : 'circle-flags:bg',
  )

  const toggleLanguage = () => {
    setLocale(nextLang.value)
    mobileOpened.value = false
  }
</script>
