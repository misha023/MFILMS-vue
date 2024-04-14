<script setup>
import MoviePoster from '../../assets/moviePosters/movie1.png'
</script>

<template>
  <div class="movie-card relative cursor-pointer">
    <div class="hidden-movie-info absolute top-1/2 left-1/2
                flex flex-col justify-center items-center gap-3
                text-white w-full h-full p-2.5 text-center">
      <h2 class="movie-title text-2xl font-inter font-semibold">Джентльмены</h2>
      <h5 class="movie-description text-xs font-inter font-semibold">Отличный фильм про гангстера и его друзей, про то как они пытались выбраться из криминального мира.</h5>
    </div>
    <img class="movie-img w-full" :src="MoviePoster">
  </div>
</template>

<style scoped>
@import '@fontsource/inter';

.movie-card {
  width: 200px;
  height: 290px;
  background: #e2e2e2;
}

.movie-card img {
  padding: 8.7px 8.57px;
  border-radius: 5px;
}

.hidden-movie-info {
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0);
  transition: opacity 0.4s, background-color 0.4s;
  opacity: 0;
}

.movie-card:hover .hidden-movie-info {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7); /* При наведении делаем фон блока непрозрачным */
}
</style>