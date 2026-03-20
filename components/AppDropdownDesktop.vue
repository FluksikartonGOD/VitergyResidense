<template>
  <div
    ref="dropdownRef"
    class="relative group"
    @click.prevent="isHovered = !isHovered"
  >
    <slot
      name="trigger"
      :isHovered="isHovered"
    ></slot>
    <div
      v-show="isHovered"
      @click.stop
      class="absolute top-full left-0 min-w-[200px] flex flex-col overflow-hidden app-shadow z-50"
    >
      <slot
        name="content"
        :close="closeDropdown"
      ></slot>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { onClickOutside } from '@vueuse/core'

  const isHovered = ref(false)
  const dropdownRef = ref(null)

  const closeDropdown = () => {
    isHovered.value = false
  }

  onClickOutside(dropdownRef, () => {
    if (isHovered.value) {
      isHovered.value = false
    }
  })
</script>
