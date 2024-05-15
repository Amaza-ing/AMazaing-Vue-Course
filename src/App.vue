<script setup>
import { ref, watchEffect } from "vue";

const userName = ref("Adrián");

const setName = () => {
  userName.value = "María";
};

watchEffect(
  () => {
    console.log("User Name modified to: ", userName.value);
  }
);
</script>

<template>
  <h1>WatchEffect | Vigilancia de cambios</h1>

  <h2>Hola {{ userName }}</h2>

  <button @click="setName">Cambiar de Usuario</button>
</template>

<style></style>
