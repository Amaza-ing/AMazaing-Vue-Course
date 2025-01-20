<script setup>
import { useRoute } from "vue-router";
import { useMovieStore } from "../stores/movie";

const route = useRoute();
const movieStore = useMovieStore();

const movieTitle = route.params.movieTitle;
const movie = movieStore.getMovie(movieTitle);

</script>

<template>
  <h2 v-if="!movie">La película no existe</h2>
  <div v-else>
    <h2>Title: {{ movie.title }}</h2>
    <h3>Duration: {{ movie.duration }}</h3>
    <h3>Director: {{ movie.director }}</h3>
  </div>
</template>

<style></style>
