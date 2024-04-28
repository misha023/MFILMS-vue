<script setup>
import { inject } from 'vue'

const currentPage = inject('currentPage')
const totalPages = inject('totalPages')
</script>

<template>
<div class="page-tracker-container flex items-center justify-center
            p-2 text-white sticky bottom-0 w-full">
  <span class="text-xs">
    Страница
    {{ currentPage.value }}
    /
    {{ totalPages }}
  </span>
</div>
</template>

<style scoped>
.page-tracker-container {background: var(--body-secondary-color)}
</style>