<script setup>
import { reactive } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import { useMovieStore } from "../stores/movie";

const movieStore = useMovieStore();

const movie = reactive({
  title: "",
  duration: 0,
  director: "",
});

const handleSubmit = () => {
  if (!movie.title || !movie.duration || !movie.director) {
    alert("Rellena todos los campos, por favor");
    return;
  }

  movieStore.addMovie(movie);
};
</script>

<template>
  <HeaderComponent />

  <form @submit.prevent="handleSubmit" class="form">
    <label for="title">Title</label>
    <input v-model="movie.title" type="text" id="title" />

    <label for="duration">Duration</label>
    <input v-model="movie.duration" type="number" id="duration" />

    <label for="director">Director</label>
    <input v-model="movie.director" type="text" id="director" />

    <button>Enviar</button>
  </form>
</template>

<style>
.form {
  margin: 20px auto;
  width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
