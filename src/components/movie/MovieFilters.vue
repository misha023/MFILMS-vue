<script setup>
</script>

<template>
<div class="movie-filters text-xs h-screen flex flex-col gap-6 pb-6 sticky top-0
            text-stone-300 p-4 overflow-y-auto min-w-max">

  <ul class="filter-block px-6 py-4 list-disc	list-inside
             flex flex-col gap-1.5 min-w-max">
    <li class="active">Все</li>
    <li class="">Нуар</li>
    <li class="">Драма</li>
    <li class="">Сказка</li>
    <li class="">Боевик</li>
    <li class="">Триллер</li>
    <li class="">Комедия</li>
    <li class="">Вестерн</li>
    <li class="">Детектив</li>
    <li class="">Трагедия</li>
    <li class="">Мелодрама</li>
    <li class="">Фильм ужасов</li>
    <li class="">Фильм катастрофа</li>
    <li class="">Гангстерский фильм</li>
    <li class="">Музыкальный фильм</li>
    <li class="">Исторический фильм</li>
    <li class="">Политический фильм</li>
    <li class="">Фантастический фильм</li>
    <li class="">Приключенческий фильм</li>
  </ul>

  <ul class="filter-block px-6 py-4 list-disc	list-inside
             flex flex-col gap-1.5 min-w-max">
    <li class="">Популярные</li>
    <li class="active">Новые</li>
    <li class="">Дата сьемки</li>
    <li class="">Дата добавления</li>
  </ul>
</div>
</template>

<style scoped>
.movie-filters {background: var(--body-ligher-color)}
.filter-block {background: var(--child-background)}

ul.filter-block li {
  white-space: nowrap;
  cursor: pointer;
}
ul.filter-block li:hover {text-decoration: underline}
ul.filter-block li.active {color: white}
</style>