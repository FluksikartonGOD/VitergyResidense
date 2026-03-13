<template>
  <footer class="bg-gray-900 text-white border-t border-gray-800 pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Logo & Description -->
        <div>
          <NuxtLink
            to="/"
            class="inline-block mb-6"
          >
            <img
              src="/images/nav-logo.png"
              alt="PrimeWin"
              class="h-8 w-auto filter brightness-0 invert"
            />
          </NuxtLink>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Професионални футболни прогнози за сериозни играчи. Печелете всеки
            ден с нашите анализи и съвети.
          </p>
          <div class="flex gap-4">
            <!-- Social placeholders could go here -->
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-6 text-primary">Бързи Връзки</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="/"
                class="text-gray-400 hover:text-white transition"
              >
                Начало
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/bezplatni-prognozi"
                class="text-gray-400 hover:text-white transition"
              >
                Безплатни Прогнози
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/premium-prognozi"
                class="text-gray-400 hover:text-white transition"
              >
                Premium Прогнози
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/vip-prognozi"
                class="text-gray-400 hover:text-white transition"
              >
                VIP Прогнози
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/abonamenti"
                class="text-gray-400 hover:text-white transition"
              >
                Абонаменти
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/kontakti"
                class="text-gray-400 hover:text-white transition"
              >
                Контакти
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Account -->
        <div>
          <h3 class="text-lg font-bold mb-6 text-primary">Потребител</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="/login"
                class="text-gray-400 hover:text-white transition"
              >
                Вход
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/register"
                class="text-gray-400 hover:text-white transition"
              >
                Регистрация
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="text-lg font-bold mb-6 text-primary">Информация</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="/kontakti"
                class="text-gray-400 hover:text-white transition"
              >
                Контакти
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/za-nas"
                class="text-gray-400 hover:text-white transition"
              >
                За Нас
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/obshti-usloviya"
                class="text-gray-400 hover:text-white transition"
              >
                Общи Условия
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/deklaratsiya-za-poveritelnost"
                class="text-gray-400 hover:text-white transition"
              >
                Декларация за поверителност
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm"
      >
        <p>
          &copy; {{ new Date().getFullYear() }} PrimeWin. Всички права запазени.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
