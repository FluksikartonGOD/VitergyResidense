<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <NuxtLink
      v-for="building in store.buildings"
      :key="building.id"
      :to="localePath(`/buildings/${building.id}`)"
      class="relative group overflow-hidden aspect-square bg-dark block shadow-card-dark"
    >
      <img
        :src="building.image"
        :alt="$t(building.nameKey)"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <!-- Gradient Overflow -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
      ></div>

      <!-- Text Overlay -->
      <div class="absolute bottom-4 right-4 text-right">
        <h3
          class="text-white text-2xl font-bold group-hover:text-primary transition-colors uppercase tracking-wide"
        >
          {{ $t(building.nameKey) }}
        </h3>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  import { useBuildingsStore } from '~/stores/buildings'

  const store = useBuildingsStore()
  const localePath = useLocalePath()
</script>
