<template>
  <div class="flex flex-col items-center w-full">
    <div
      @click="isExpanded = !isExpanded"
      class="relative flex items-center gap-2 justify-center w-full"
      :class="{ 'text-primary bg-dark': isExpanded }"
    >
      <slot name="trigger"></slot>
      <Icon
        :name="
          isExpanded
            ? 'material-symbols:keyboard-arrow-up'
            : 'material-symbols:keyboard-arrow-down'
        "
        class="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 flex-shrink-0 text-current"
      />
    </div>
    <div
      v-show="isExpanded"
      class="flex flex-col w-full py-4"
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
