<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import { useMovieStore } from "../stores/movie";

const movieStore = useMovieStore();
</script>

<template>
  <HeaderComponent />

  <div class="movies">
    <ul>
      <li v-for="movie in movieStore.movies" :key="movie.title" class="movie">
        <h2>{{ movie.title }}</h2>
        <p>Duration: {{ movie.duration }}</p>
        <p>Director: {{ movie.director }}</p>
      </li>
    </ul>
  </div>
</template>

<style>
.movies {
  margin: 20px auto;
  width: 500px;

  .movie {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
}
</style>
