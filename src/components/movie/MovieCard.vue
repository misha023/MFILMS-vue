<script setup>
defineProps({
  'movie': Object
})
</script>

<template>
<div class="movie-card">
  <h2>{{movie['title']}}</h2>
  <h5>{{movie['description']}}</h5>
  <img src="{{movie['poster_url']}}">
</div>
</template>

<style scoped>

</style>