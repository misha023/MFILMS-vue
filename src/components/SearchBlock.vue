<script setup>
import fontAwesomeIcon from '@fortawesome/vue-fontawesome/src/components/FontAwesomeIcon.js'
import { faAngleRight, faAngleLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
<div class="search-container flex justify-between items-center
            px-8 text-2xl text-white sticky top-0 z-10">
  <font-awesome-icon class="search-icon left cursor-pointer" :icon="faAngleLeft" />
  <div class="search-block cursor-pointer w-1/2 my-2.5 flex gap-2 items-center justify-center rounded-md max-w-3xl">
    <font-awesome-icon class="placeholder-icon text-xs" :icon="faSearch" />
    <span class="placeholder font-inter text-sm">Поиск</span>
  </div>
  <font-awesome-icon class="search-icon right cursor-pointer" :icon="faAngleRight" />
</div>
</template>

<style scoped>
@import '@fontsource/inter';

.search-container {background: var(--body-secondary-color)}

.search-block {
  padding: 6.5px 0px;
  background: var(--body-ligher-color);
}
</style>