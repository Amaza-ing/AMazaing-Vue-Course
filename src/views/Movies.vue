<script setup>
import { ref } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";

const movies = ref([
  { title: "Inception", duration: "148 min", director: "Christopher Nolan" },
  {
    title: "The Lord of the Rings",
    duration: "201 min",
    director: "Peter Jackson",
  },
  { title: "Interstellar", duration: "169 min", director: "Christopher Nolan" },
]);
</script>

<template>
  <HeaderComponent />

  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.title" class="movie">
        <h2>{{ movie.title }}</h2>
        <p>Duration: {{ movie.duration }}</p>
        <p>Director: {{ movie.director }}</p>
      </li>
    </ul>
  </div>
</template>

<style>
.movie {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
