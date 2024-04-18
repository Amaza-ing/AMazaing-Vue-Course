<script setup>
</script>

<template>
  <div class="child">
    <slot name="top"></slot>

    <h2>Este es un componente hijo</h2>

    <slot name="bottom"></slot>
  </div>
</template>

<style>
.child {
  border: 5px solid black;
  margin: 10px;
  padding: 10px;
}
</style>
