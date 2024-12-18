<script setup>
const movies = ["Lord of the Rings", "Star Wars", "Dune"];
</script>

<template>
  <h1>Renderizado de listas | v-for</h1>

  <div>
    <p v-for="(movie, index) in movies" :key="movie">
      {{index + 1}} - {{ movie }}
    </p>
  </div>
</template>

<style>
</style>
