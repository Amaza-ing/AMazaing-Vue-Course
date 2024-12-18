<script setup>
import { ref } from "vue";

const myId = "patata";

const myValue = ref("Some value");
</script>

<template>
  <h1 :id="myId">Hola a todos!</h1>

  <h2>{{ myValue }}</h2>
  <input type="text" :value="myValue" />
</template>

<style></style>
