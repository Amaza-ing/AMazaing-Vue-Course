<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params.movieName);

const movie = null;

</script>

<template>
  <h2 v-if="!movie">La película no existe</h2>
  <div v-else>
    <h2>Title: {{ movie.name }}</h2>
    <h3>Duration: {{ movie.duration }}</h3>
    <h3>Director: {{ movie.director }}</h3>
  </div>
</template>

<script></script>
