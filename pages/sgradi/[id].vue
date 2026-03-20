<template>
  <div class="app-page building-page">
    <div class="container mx-auto px-4 py-8 mt-[90px]">
      <h1 class="text-4xl font-bold mb-4">{{ $t('nav.building') }} {{ id }}</h1>
      <p class="text-lg">
        Детайли за сградата ще бъдат добавени тук... / Details for the building
        will be added here...
      </p>
      <NuxtLink
        :to="localePath('/sgradi')"
        class="mt-8 inline-block text-primary hover:underline"
      >
        &larr; Обратно / Back
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const route = useRoute()
  const id = route.params.id
  const localePath = useLocalePath()
</script>
