<script setup>
import { ref, watch } from "vue";

const userName = ref({ name: "Adrián" });

const setName = () => {
  userName.value.name = "María";
};

watch(
  userName,
  (newValue, oldValue) => {
    console.log("User Name modified", newValue, oldValue);
  },
  {
    immediate: true,
    deep: true
  }
);
</script>

<template>
  <h1>Watch | Vigilancia de cambios</h1>

  <h2>Hola {{ userName.name }}</h2>

  <button @click="setName">Cambiar de Usuario</button>
</template>

<style></style>
