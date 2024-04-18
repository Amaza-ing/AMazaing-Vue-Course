<script setup>
import { ref } from "vue";
const emit = defineEmits(["login"])

const userName = ref("Adrián");

const login = () => {
  emit("login", userName.value)
}
</script>

<template>
  <div class="child">
    <h2>Este es un componente hijo</h2>

    <p>Nombre de usuario: {{ userName }}</p>

    <button @click="login">Login</button>
  </div>
</template>

<style>
.child {
  border: 5px solid black;
}
</style>
