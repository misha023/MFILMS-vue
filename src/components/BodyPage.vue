<script setup>
import { getMoviesAPI } from '@/api.js'
import { onMounted, reactive, ref, watch } from 'vue'

import SearchBlock from '@/components/SearchBlock.vue'
import MovieCard from '@/components/movie/MovieCard.vue'
import MoviePageTracker from '@/components/movie/MoviePageTracker.vue'

const movieCurrentPage = reactive({'value': 1})
const movieTotalPages = ref(0)

const pageIncrementEvent = () => {
  console.log(movieCurrentPage.value)
  movieCurrentPage.value++
}

const moviesData = ref([])
onMounted(async () =>
  await getMoviesAPI(movieCurrentPage.value).then(movies => {
    moviesData.value = movies.docs
    movieTotalPages.value = movies['pages']
  })
)

watch(() => movieCurrentPage.value, async () => {
  console.log(movieCurrentPage.value)
  await getMoviesAPI(movieCurrentPage.value).then(movies => {
    moviesData.value.push(...movies.docs)
  })
})
console.log(movieCurrentPage.value)
</script>

<template>
<main class="main-container flex">
  <div class="movie-catalog w-full" :onclick="pageIncrementEvent">
    <SearchBlock />
    <div class="movie-container m-8 mb-12 flex flex-wrap gap-8">
      <MovieCard
        v-for="movie in moviesData"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <MoviePageTracker :currentPage="movieCurrentPage.value" :totalPages="movieTotalPages" />
  </div>
<!--  <MovieFilters />-->
</main>
</template>

<style scoped>

</style>