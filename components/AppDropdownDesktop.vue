<template>
  <div class="relative group" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <slot name="trigger" :isHovered="isHovered"></slot>
    <div
      v-show="isHovered"
      class="absolute top-full left-0 bg-darkSecond min-w-[200px] flex flex-col shadow-xl rounded-b-md overflow-hidden border border-gray-800 z-50"
    >
      <slot name="content" :close="closeDropdown"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isHovered = ref(false)

const closeDropdown = () => {
  isHovered.value = false
}
</script>
