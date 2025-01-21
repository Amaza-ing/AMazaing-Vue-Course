<script setup>
import { onMounted, onUnmounted } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import { useMovieStore } from "../stores/movie";

const movieStore = useMovieStore();

onMounted(() => {
  console.log("Movie Component Mounted");  
})

onUnmounted(() => {
  console.log("Movie Component Unmounted");
})
</script>

<template>
  <HeaderComponent />

  <div class="movies">
    <ul>
      <li v-for="movie in movieStore.movies" :key="movie.title" class="movie">
        <h2>
          <router-link
            :to="{ name: 'movieDetails', params: { movieTitle: movie.title } }"
            >{{ movie.title }}</router-link
          >
        </h2>
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
