<template>
  <div class="app-page building-page">
    <BuildingsOne v-model="selectedApartmentKey" />
    <div class="container flex flex-col mx-auto px-4 py-4 md:py-12" v-if="building && currentApartment">
      <h1 class="text-4xl font-bold mb-4 text-primary">{{ $t(currentApartment.titleKey) }}</h1>
      <p class="text-lg text-dark mb-8">
        {{ $t(currentApartment.descriptionKey) }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 class="text-2xl font-bold mb-4 text-primary">{{ $t('buildings.main_features') }}</h2>
          <ul class="space-y-2">
            <li v-for="(feature, idx) in currentApartment.main_features" :key="idx" class="flex justify-between border-b border-gray-200 pb-2">
              <span class="font-medium">{{ $t(feature.nameKey) }}</span>
              <span>{{ $t(feature.descriptionKey) }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4 text-primary">{{ $t('buildings.additional_features') }}</h2>
          <ul class="space-y-2">
            <li v-for="(feature, idx) in currentApartment.additional_features" :key="idx" class="flex justify-between border-b border-gray-200 pb-2">
              <span class="font-medium">{{ $t(feature.nameKey) }}</span>
              <span>{{ $t(feature.descriptionKey) }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-4 text-primary">{{ $t('buildings.details') }}</h2>
        <ul class="list-disc pl-5 space-y-1">
          <li v-for="(detail, idx) in currentApartment.details" :key="idx">
            <span class="font-medium">{{ $t(detail.nameKey) }}: </span>
            <span>{{ $t(detail.descriptionKey) }}</span>
          </li>
        </ul>
      </div>

      <div class="relative w-full max-w-[400px] mx-auto">
        <Transition name="slide-up">
          <img
            :src="selectedSkica"
            class="aspect-square w-full h-full h-auto object-contain"
            :key="selectedSkica"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, watch } from 'vue'
  import { useBuildingsStore } from '~/stores/buildings'

  const route = useRoute()
  const id = Number(route.params.id)
  
  const buildingsStore = useBuildingsStore()
  const building = buildingsStore.getBuildingById(id)

  const selectedApartmentKey = ref(building?.apartments?.[0]?.nameKey || '')

  const currentApartment = computed(() => {
    return building?.apartments?.find((a) => a.nameKey === selectedApartmentKey.value) || building?.apartments?.[0]
  })

  const selectedSkica = computed(() => {
    return currentApartment.value?.sketch || ''
  })
</script>
