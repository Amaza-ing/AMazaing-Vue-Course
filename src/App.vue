<script setup>
import ChildComponent from "./components/ChildComponent.vue";

const text = "Info desde variable en el padre";

const person = {
  sex: "hombre",
  age: 30
}
</script>

<template>
  <h1>Props | Comunicación Padre-hijo ⬇</h1>

  <ChildComponent :msg="text" :person="person"></ChildComponent>
  <ChildComponent msg="Otro mensaje"></ChildComponent>
</template>

<style></style>
