<!-- npm install vitest @vue/test-utils jsdom -D -->

<script setup>
import { ref } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";

const counter = ref(1);
</script>

<template>
  <!-- <HeaderComponent /> -->

  <h1>Welcome to the Home Page</h1>

  <h2 id="counter">Counter: {{ counter }} <button @click="counter++">+</button></h2>
</template>

<style></style>
