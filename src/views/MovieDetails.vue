<script setup>
import { useRoute } from "vue-router";
import { useMovieStore } from "../stores/movie";
import { watch } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";

const route = useRoute();
const movieStore = useMovieStore();

let movieTitle = route.params.movieTitle;
let movie = movieStore.getMovie(movieTitle);

watch(
  () => route.params.movieTitle,
  () => {
    movieTitle = route.params.movieTitle;
    movie = movieStore.getMovie(movieTitle);
  }
);
</script>

<template>
  <HeaderComponent />

  <h2 v-if="!movie">La película no existe</h2>
  <div v-else>
    <h2>Title: {{ movie.title }}</h2>
    <h3>Duration: {{ movie.duration }}</h3>
    <h3>Director: {{ movie.director }}</h3>
  </div>

  <h2>
    <router-link
      :to="{ name: 'movieDetails', params: { movieTitle: 'Interstellar' } }"
      >Interstellar</router-link
    >
  </h2>
</template>

<style></style>
