<template>
  <div
    ref="buildingWrapper"
    class="app-building"
    :class="{ 'is-intro': intro }"
  >
    <BuildingsOneSvg />
    <div
      class="lg:absolute bottom-0 left-0 right-0 py-4 lg:py-8 bg-primary text-dark"
    >
      <div class="container mx-auto px-4">
        <div
          class="relative flex justify-center items-center min-h-[45px] w-full"
        >
          <Transition name="slide-up">
            <h1
              v-if="!intro && selectedApartment"
              class="text-[1.3rem] text-center font-bold w-full"
              :key="selectedApartment"
            >
              {{ $t(selectedApartment) }}
            </h1>
            <h1
              v-else
              class="text-[1rem] text-center font-bold w-full"
            >
              {{ $t('buildings.click_to_select_apartment') }}
            </h1>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useBuildingsStore } from '~/stores/buildings'

  const store = useBuildingsStore()
  const building = store.getBuildingById(1)

  const buildingWrapper = ref(null)
  const intro = ref(true)
  const selectedApartment = defineModel()
  const apartmentPaths = ref([])

  const getApartmentByPathId = (pathId) => {
    return building?.apartments.find((a) => a.pathId === pathId)
  }

  const onApartmentSelect = (pathId) => {
    const apt = getApartmentByPathId(pathId)
    if (apt) {
      selectedApartment.value = apt.nameKey
    }
  }

  const onApartmentClick = (apartment) => {
    apartmentPaths.value.forEach((apartmentPath) => {
      apartmentPath.classList.remove('path-active')
    })
    onApartmentSelect(apartment.srcElement.getAttribute('id'))
    apartment.srcElement.classList.add('path-active')
  }

  const wait = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, ms)
    })
  }

  onMounted(async () => {
    // Now buildingWrapper.value is a native DOM element (the <div>)
    // instead of a Vue component instance, so querySelectorAll works!
    apartmentPaths.value = buildingWrapper.value.querySelectorAll('path')

    await wait(1000)

    for (let i = 0; i < apartmentPaths.value.length; i++) {
      const ap = apartmentPaths.value[i]
      await wait(1000)
      ap.classList.add('path-active')
      await wait(1000)
      ap.classList.remove('path-active')
    }
    await wait(500)
    intro.value = false
    apartmentPaths.value[0].classList.add('path-active')
    apartmentPaths.value.forEach((apartmentPath) => {
      apartmentPath.addEventListener('click', onApartmentClick)
    })
  })
</script>

<style>
  .app-building {
    position: relative;

    svg {
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
    }

    path {
      cursor: pointer;
      transition: all 0.3s linear;
      -webkit-tap-highlight-color: transparent;
      user-select: none;

      &:active,
      &.path-active {
        stroke: #ca9e67 !important; /* Optional: add a border when pressed */
        stroke-width: 5px !important;
        fill: #ca9e67 !important;
        fill-opacity: 0.7 !important;
      }
    }

    &:not(.is-intro) path.path-selected,
    &:not(.is-intro) path:hover {
      fill: #ca9e67 !important;
      fill-opacity: 0.5 !important;
    }
  }

  /* Slide Up Transition for Text */
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.3s linear;
  }
  .slide-up-leave-active {
    position: absolute;
    width: 100%;
  }
  .slide-up-enter-from {
    opacity: 0;
    transform: translateY(15px);
  }
  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(-15px);
  }
</style>
