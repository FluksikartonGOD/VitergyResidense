<template>
  <div class="app-page index-page">
    <!-- Header Section -->
    <header class="relative pt-4 pb-12">
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div
        class="relative container text-center text-white font-black mx-auto px-4"
      >
        <h1 class="text-5xl md:text-5xl leading-[1.3] mb-8">
          {{ $t('index.title') }}
        </h1>
        <p class="text-xl md:text-2xl leading-[1.3] font-normal">
          {{ $t('index.welcome') }}
        </p>
      </div>
    </header>
    <section>
      <div class="container mx-auto px-4 py-8 md:py-16">
        <Buildings />
      </div>
    </section>
  </div>
</template>

<script setup></script>
