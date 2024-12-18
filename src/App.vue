<script setup>
let myCondition = true;
</script>

<template>
  <!-- <h1 :class="myCondition ? 'highlight' : ''">Hola a todos</h1> -->
  <h1 :class="{ highlight: myCondition, red: true }">Hola a todos</h1>
</template>

<style>
.highlight {
  background-color: black;
  color: yellow;
}

.red {
  color: red;
}
</style>
