<script setup>
import { ref } from "vue";

let number = ref(0);

const addOne = () => {
  number.value++;
}
</script>

<template>
  <h1>Hola a todos!</h1>
  <h2 @click="addOne">{{ number }}</h2>
</template>

<style></style>
