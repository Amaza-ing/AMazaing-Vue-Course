<script setup>
import { computed, ref } from "vue";

const userName = ref("María");
const nameLength = computed(() => {
  return userName.value.length;
})
</script>

<template>
  <h1>Computed | Propiedades computadas</h1>

  <input type="text" v-model="userName">
  <h2>Hola {{ userName }}</h2>
  <h3>Tu nombre tiene {{ nameLength }} letras</h3>
</template>

<style></style>
