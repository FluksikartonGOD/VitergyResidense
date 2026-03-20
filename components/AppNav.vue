<template>
  <nav
    class="app-nav fixed flex items-center bg-dark h-[90px] top-0 left-0 right-0 z-10"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between lg:justify-center gap-8">
        <NuxtLink
          :to="localePath('/')"
          class="flex-shrink-0 text-primary"
        >
          <!-- <img
            src="/images/nav-logo.png"
            alt="logo"
            class="h-[25px] mb-[5px] md:mb-0 md:h-auto w-auto"
          /> -->
          <span class="text-xl font-bold">Vitergy Residense</span>
        </NuxtLink>

        <div class="hidden lg:flex items-center justify-center h-full flex-1">
          <template
            v-for="link in mainNavLinks"
            :key="link.to"
          >
            <template v-if="!link.hasSubmenu">
              <NuxtLink
                :to="localePath(link.to)"
                class="app-nav-link hover:text-primary font-medium h-full flex items-center justify-center"
              >
                {{ $t(link.labelKey) }}
              </NuxtLink>
            </template>
            <AppDropdownDesktop
              v-else
              class="h-full flex items-center justify-center text-primary"
            >
              <template #trigger="{ isHovered }">
                <span
                  class="app-nav-link text-primary font-medium inline-flex items-center gap-1 py-4 h-full flex items-center justify-center"
                >
                  {{ $t(link.labelKey) }}
                  <Icon
                    name="material-symbols:keyboard-arrow-down"
                    class="w-5 h-5 transition-transform duration-200"
                    :class="{ 'rotate-180': isHovered }"
                  />
                </span>
              </template>
              <template #content="{ close }">
                <NuxtLink
                  v-for="subLink in link.submenuItems"
                  :key="subLink.to"
                  @click="close"
                  :to="localePath(subLink.to)"
                  class="app-nav-link dropdown-link px-4 py-3 transition-colors whitespace-nowrap"
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
            class="flex items-center gap-2 hover:opacity-80 transition-opacity bg-primary px-3 py-1.5 rounded-full border border-primary app-shadow"
          >
            <Icon
              :name="langIcon"
              class="w-5 h-5 rounded-full object-cover"
            />
            <span class="text-sm font-bold uppercase tracking-wider text-dark">
              {{ nextLang }}
            </span>
          </button>
        </div>

        <button
          class="h-[3rem] w-[3rem] mr-[-8px] lg:hidden bg-transparent flex items-center justify-center rounded-sm"
          :class="mobileOpened ? 'text-primary' : 'text-white'"
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
      class="fixed top-[90px] h-[calc(100vh-90px)] left-0 right-0 bottom-0 bg-dark z-40 overflow-y-auto"
    >
      <div class="py-8 flex flex-col gap-3 text-center text-xl font-bold">
        <template
          v-for="link in mainNavLinks"
          :key="link.to"
        >
          <template v-if="!link.hasSubmenu">
            <NuxtLink
              @click="mobileOpened = false"
              :to="localePath(link.to)"
              class="app-nav-mobile-link hover:text-primary"
            >
              {{ $t(link.labelKey) }}
            </NuxtLink>
          </template>
          <AppDropdownMobile
            v-else
            class="text-primary"
          >
            <template #trigger>
              <span class="app-nav-mobile-link text-primary">
                {{ $t(link.labelKey) }}
              </span>
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
                class="app-nav-mobile-link dropdown-link w-full font-normal"
              >
                {{ $t(subLink.labelKey) }}{{ subLink.labelSuffix || '' }}
              </NuxtLink>
            </template>
          </AppDropdownMobile>
        </template>

        <div class="mt-8 pt-8 flex justify-center">
          <button
            @click="toggleLanguage"
            class="flex items-center gap-3 hover:opacity-80 transition-opacity bg-gray-800 px-4 py-3 rounded-full"
          >
            <Icon
              :name="langIcon"
              class="w-5 h-5"
            />
            <span
              class="text-sm leading-none font-bold uppercase tracking-widest text-gray-200"
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
