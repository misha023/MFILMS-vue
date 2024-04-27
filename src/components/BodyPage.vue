<script setup>
import { getMoviesAPI } from '@/api.js'
import { onMounted, provide, reactive, ref, watch } from 'vue'

import SearchBlock from '@/components/SearchBlock.vue'
import MovieCard from '@/components/movie/MovieCard.vue'
import MoviePageTracker from '@/components/movie/MoviePageTracker.vue'
import MovieFilters from '@/components/movie/MovieFilters.vue'
import { calculateTotalMoviesOnScreen } from '@/utils/utils.js'

const moviesData = ref([])

const movieCurrentPage = reactive({'value': 1})
const movieTotalPages = ref(0)
const movieOnScreen = ref(25)

const defineMovieOnScreen = () => {
  const screenWidth = window.innerWidth
  movieOnScreen.value = calculateTotalMoviesOnScreen(screenWidth)
}

const pageIncrement = () => movieCurrentPage.value++
const pageDecrement = () => movieCurrentPage.value--

provide('moviesData', moviesData)

provide('pageIncrement', pageIncrement)
provide('pageDecrement', pageDecrement)

provide('currentPage', movieCurrentPage)
provide('totalPages', movieTotalPages)

// scroll loading
onMounted(() => {
  setTimeout(() => window.addEventListener('scroll', () => {
    const doc = document.documentElement
    const isScrollEnd = (doc.scrollHeight - doc.scrollTop) <= doc.clientHeight + 2
    isScrollEnd && console.error("SCROLL DEBUG: page increment; current page -", movieCurrentPage.value)
    isScrollEnd && pageIncrement()
  }), 2000)
});

watch(movieCurrentPage, async (newValue) => {
  defineMovieOnScreen();
  await getMoviesAPI(newValue.value, movieOnScreen.value).then(movies => {
    moviesData.value.push(...movies.docs)
    movieTotalPages.value = movies['pages']
  })
}, { immediate: true })
</script>

<template>
<main class="main-container flex h-full">
  <div class="movie-catalog w-full">
    <SearchBlock />
    <div class="movie-container m-8 mb-12 flex flex-wrap gap-8">
      <MovieCard
        v-for="movie in moviesData"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <MoviePageTracker />
  </div>
  <MovieFilters />
</main>
</template>

<style scoped>
</style>