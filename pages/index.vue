<template>
  <div class="app-page index-page">
    <!-- Header Section -->
    <header class="xl:min-h-[800px] pt-4 pb-12">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <div class="flex-1 max-w-[700px]">
            <h1
              class="text-[30px] md:text-[50px] lg:text-[60px] leading-[1.3] mb-6 flex-1 flex flex-col"
            >
              <span
                class="text-[24px] md:text-[30px] lg:text-[40px] font-[300]"
              >
                Професионални футболни прогнози
              </span>
              <span
                class="text-[24px] md:text-[30px] lg:text-[40px] font-[900]"
              >
                печелиш пари
                <strong class="text-primary">всеки месец</strong>
              </span>
            </h1>
            <div
              class="primary-white-gradient h-[3px] max-w-[500px] mb-6"
            ></div>
            <p
              class="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed font-[300] max-w-[450px]"
            >
              Онлайн прогнози всеки ден, стани член и печели с нас. Всеки ден
              нови прогнози!
            </p>
            <div class="flex flex-wrap items-center gap-6 mt-4">
              <NuxtLink
                class="px-[30px] py-[14px] md:px-[40px] md:py-[16px] text-[16px] md:text-[18px] font-bold border border-primary/50 bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 shadow-[0_0_15px_rgba(203,242,48,0.15)] hover:shadow-[0_0_25px_rgba(203,242,48,0.3)] backdrop-blur-sm transform hover:-translate-y-0.5"
                style="border-radius: 20px 100px 100px 20px"
                to="/register"
              >
                СТАНИ ЧЛЕН
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup></script>
