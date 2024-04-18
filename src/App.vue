<script setup>
import ChildComponent from "./components/ChildComponent.vue";
</script>

<template>
  <h1>slots</h1>

  <h2>Este es el componente padre</h2>

  <ChildComponent>
    <template v-slot:bottom>
      <h3>slot para bottom</h3>
    </template>
    <template v-slot:top>
      <h3>contenido para el slot top</h3>
    </template>
  </ChildComponent>
</template>

<style></style>
