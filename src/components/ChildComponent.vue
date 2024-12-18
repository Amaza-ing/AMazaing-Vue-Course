<script setup>
defineProps({
  msg: String,
  person: {
    sex: String,
    age: Number
  }
})
</script>

<template>
  <h2>Este es un componente hijo</h2>

  <p>{{ msg }}</p>
  <div>{{ person?.sex }} - {{ person?.age }}</div>
</template>

<style></style>