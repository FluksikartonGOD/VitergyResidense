<template>
  <div class="flex flex-col items-center w-full">
    <div class="flex items-center gap-2 justify-center w-full">
      <slot name="trigger"></slot>
      <button @click="isExpanded = !isExpanded" class="p-2 bg-gray-800 rounded-full ml-auto md:ml-2">
        <Icon :name="isExpanded ? 'material-symbols:keyboard-arrow-up' : 'material-symbols:keyboard-arrow-down'" class="w-5 h-5 flex-shrink-0" />
      </button>
    </div>
    <div
      v-show="isExpanded"
      class="flex flex-col gap-4 mt-4 text-base font-normal text-gray-300 w-full max-w-xs mx-auto bg-gray-900 rounded-lg p-4"
    >
      <slot name="content" :close="closeDropdown"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

const closeDropdown = () => {
  isExpanded.value = false
}
</script>
