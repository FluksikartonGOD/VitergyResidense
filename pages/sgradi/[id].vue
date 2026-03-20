<template>
  <div class="app-page building-page">
    <BuildingsOne v-model="selectedApartment" />
    <div class="container flex flex-col mx-auto px-4 py-8">
      <ClientOnly>
        <div class="relative inline-flex mx-auto">
          <Transition name="slide-up">
            <img
              :src="selectedSkica"
              class="w-full aspect-square max-w-[400px] mx-auto object-contain"
              :key="selectedSkica"
            />
          </Transition>
        </div>
      </ClientOnly>
      <!-- <h1 class="text-4xl font-bold mb-4">{{ $t('nav.building') }} {{ id }}</h1>
      <p class="text-lg">
        Детайли за сградата ще бъдат добавени тук... / Details for the building
        will be added here...
      </p> -->
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const route = useRoute()
  const id = route.params.id
  const localePath = useLocalePath()

  const selectedApartment = ref('Апартамент 1')

  const selectedSkica = computed(() => {
    if (selectedApartment.value === 'Апартамент 1')
      return '/images/test-skica.jpg'

    return '/images/test-skica-2.jpg'
  })
</script>
