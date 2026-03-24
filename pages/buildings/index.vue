<template>
  <div class="app-page buildings-page">
    <div class="container mx-auto px-4 py-8 mt-[90px]">
      <h1 class="text-4xl font-bold mb-4">{{ $t('buildings.title') }}</h1>
      <p class="text-lg">{{ $t('buildings.description') }}</p>

      <div class="mt-8 flex flex-col gap-4">
        <NuxtLink
          :to="localePath('/buildings/1')"
          class="text-primary hover:underline"
        >
          {{ $t('nav.building') }} 1
        </NuxtLink>
        <NuxtLink
          :to="localePath('/buildings/2')"
          class="text-primary hover:underline"
        >
          {{ $t('nav.building') }} 2
        </NuxtLink>
        <NuxtLink
          :to="localePath('/buildings/3')"
          class="text-primary hover:underline"
        >
          {{ $t('nav.building') }} 3
        </NuxtLink>
        <NuxtLink
          :to="localePath('/buildings/4')"
          class="text-primary hover:underline"
        >
          {{ $t('nav.building') }} 4
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  const localePath = useLocalePath()
</script>
