<template>
  <nav
    class="app-nav fixed flex items-center bg-darkSecond h-[90px] top-0 left-0 right-0 z-10"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between lg:justify-center gap-8">
        <NuxtLink
          to="/"
          class="flex-shrink-0"
        >
          <img
            src="/images/nav-logo.png"
            alt="uni-sofia.bg"
            class="h-[25px] mb-[5px] md:mb-0 md:h-auto w-auto"
          />
        </NuxtLink>
        <div class="hidden lg:flex items-center justify-center flex-1 gap-4">
          <NuxtLink to="/bezplatni-prognozi">БЕЗПЛАТНИ Прогнози</NuxtLink>
          <NuxtLink to="/premium-prognozi">Premium Прогнози</NuxtLink>
          <NuxtLink to="/vip-prognozi">VIP Прогнози</NuxtLink>
          <NuxtLink to="/abonamenti">Абонаменти</NuxtLink>
          <!-- <NuxtLink to="/kontakti"> Контакти </NuxtLink> -->
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
      <div class="container mx-auto px-4 py-8 flex flex-col gap-6 text-center">
        <NuxtLink
          @click="mobileOpened = false"
          to="/bezplatni-prognozi"
          class="text-xl font-bold hover:text-green-500"
        >
          БЕЗПЛАТНИ Прогнози
        </NuxtLink>
        <NuxtLink
          @click="mobileOpened = false"
          to="/premium-prognozi"
          class="text-xl font-bold hover:text-green-500"
        >
          Premium Прогнози
        </NuxtLink>
        <NuxtLink
          @click="mobileOpened = false"
          to="/vip-prognozi"
          class="text-xl font-bold hover:text-green-500"
        >
          VIP Прогнози
        </NuxtLink>
        <NuxtLink
          @click="mobileOpened = false"
          to="/abonamenti"
          class="text-xl font-bold hover:text-green-500"
        >
          Абонаменти
        </NuxtLink>
        <NuxtLink
          @click="mobileOpened = false"
          to="/kontakti"
          class="text-xl font-bold hover:text-green-500"
        >
          Контакти
        </NuxtLink>
      </div>
    </aside>
  </nav>
</template>

<script setup>
  const mobileOpened = ref(false)
</script>

<style lang="css"></style>
