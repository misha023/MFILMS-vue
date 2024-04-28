<script>
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

export default {
  name: "MainHeader",
  components: { ThemeSwitcher }
}
</script>

<template>
<header class="flex justify-between items-center px-6 py-1 text-white select-none">
  <h1 class="header-logo text-4xl uppercase font-impact tracking-wide
             cursor-pointer font-bold">mfilms</h1>
  <div class="menu-block hidden xl:flex text-start">
    <div class="menu-item text-xs py-2 px-8 cursor-pointer"><h5 class="menu-name text-base">Рекомендации</h5></div>
    <div class="menu-item text-xs py-2 px-8 cursor-pointer"><h5 class="menu-name text-base">Фильмы</h5></div>
    <div class="menu-item text-xs py-2 px-8 cursor-pointer"><h5 class="menu-name text-base">Мультфильмы</h5></div>
    <div class="menu-item text-xs py-2 px-8 cursor-pointer"><h5 class="menu-name text-base">Сериалы</h5></div>
    <div class="menu-item text-xs py-2 px-8 cursor-pointer"><h5 class="menu-name text-base">Аниме</h5></div>
  </div>
  <ThemeSwitcher />

</header>
</template>

<style scoped>
header {background: var(--header-color)}
.menu-item.active {background: #4D4D4D}
</style>