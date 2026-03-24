<template>
  <div class="app-page building-page">
    <BuildingsOne v-model="selectedApartment" />
    <div class="container flex flex-col mx-auto px-4 py-4 md:py-12">
      <h1 class="text-4xl font-bold mb-4 text-primary">lorem</h1>
      <p class="text-lg text-dark">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
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
