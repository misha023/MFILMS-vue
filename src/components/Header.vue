<script>
export default {
  name: "MainHeader"
}
</script>

<template>
<header class="flex justify-between items-center px-6 text-white select-none">
  <h1 class="header-logo text-5xl uppercase font-impact tracking-wide">mfilms</h1>
  <div class="menu-block hidden xl:flex text-start">
    <div class="menu-item"><h5 class="menu-name">Рекомендации</h5></div>
    <div class="menu-item"><h5 class="menu-name">Фильмы</h5></div>
    <div class="menu-item"><h5 class="menu-name">Мультфильмы</h5></div>
    <div class="menu-item"><h5 class="menu-name">Сериалы</h5></div>
    <div class="menu-item"><h5 class="menu-name">Аниме</h5></div>
  </div>
  <img src="/icon-theme-change.png" class="open-theme-change">
</header>
</template>

<style scoped>
header {background: var(--header-color)}

.header-logo {cursor: pointer}
.menu-item {
  padding: 16px 32px;
  cursor: pointer;
}
.menu-name {
  font-family: Roboto, sans-serif;
  font-weight: bolder;
  font-size: 16px;
}
.menu-item.active {background: #4D4D4D}

.open-theme-change {cursor: pointer}
</style>