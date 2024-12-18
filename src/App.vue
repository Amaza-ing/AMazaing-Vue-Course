<script setup>
const condition = "";
const condition2 = false;
</script>

<template>
  <h1>Directiva v-if</h1>

  <h2 v-if="condition">La condición se cumple</h2>
  <h2 v-else-if="condition2">Condición 2</h2>
  <h2 v-else>No se cumplen las condiciones</h2>
</template>

<style>
</style>
