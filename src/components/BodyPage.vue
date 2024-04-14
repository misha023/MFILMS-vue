<script>
import MovieCardTest from '@/components/movie/MovieCardTest.vue'
import SearchBlock from '@/components/SearchBlock.vue'
import MovieFilters from '@/components/MovieFilters.vue'

export default {
  name: 'BodyPage',
  components: { MovieFilters, SearchBlock, MovieCardTest }
}
</script>

<template>
<main class="main-container flex">
  <div class="movie-catalog w-full">
    <SearchBlock />
    <div class="movie-container m-8 flex flex-wrap gap-8">
      <MovieCardTest />
    </div>
  </div>
  <MovieFilters />
</main>
</template>

<style scoped>

</style>