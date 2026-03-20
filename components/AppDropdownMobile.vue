<template>
  <div class="flex flex-col items-center w-full">
    <div
      @click="isExpanded = !isExpanded"
      class="flex items-center gap-2 justify-center w-full"
      :class="{ 'text-primary bg-dark': isExpanded }"
    >
      <slot name="trigger"></slot>
      <Icon
        :name="
          isExpanded
            ? 'material-symbols:keyboard-arrow-up'
            : 'material-symbols:keyboard-arrow-down'
        "
        class="w-6 h-6 flex-shrink-0"
      />
    </div>
    <div
      v-show="isExpanded"
      class="flex flex-col gap-4 pt-4 bg-gray-200 text-base font-normal w-full"
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

  const isExpanded = ref(false)

  const closeDropdown = () => {
    // isExpanded.value = false
  }
</script>
