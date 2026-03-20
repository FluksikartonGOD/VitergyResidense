<template>
  <div class="container mx-auto px-4 py-8 mt-[90px]">
    <h1 class="text-4xl font-bold mb-4">{{ $t('sgradi.title') }}</h1>
    <p class="text-lg">{{ $t('sgradi.description') }}</p>

    <div class="mt-8 flex flex-col gap-4">
      <NuxtLink
        :to="localePath('/sgradi/1')"
        class="text-primary hover:underline"
      >
        {{ $t('nav.building') }} 1
      </NuxtLink>
      <NuxtLink
        :to="localePath('/sgradi/2')"
        class="text-primary hover:underline"
      >
        {{ $t('nav.building') }} 2
      </NuxtLink>
      <NuxtLink
        :to="localePath('/sgradi/3')"
        class="text-primary hover:underline"
      >
        {{ $t('nav.building') }} 3
      </NuxtLink>
      <NuxtLink
        :to="localePath('/sgradi/4')"
        class="text-primary hover:underline"
      >
        {{ $t('nav.building') }} 4
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const localePath = useLocalePath()
</script>
