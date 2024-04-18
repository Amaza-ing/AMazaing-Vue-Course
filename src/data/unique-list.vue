<script setup>
  import { ref } from 'vue';  

    const inputVal = ref("");
    const items = ref(new Set());
    
    const getItems = () => {
      return [...items.value];
    }
     
    const clear = () => {
      if (items.value.size) {
        items.value = new Set();
        inputVal.value = "";
      }
    }
    
    const addItem = () => {
      const trimmed = inputVal.value.trim();
      
      if (trimmed && !items.value.has(trimmed)) {
        items.value.add(trimmed);
        inputVal.value = "";
      }
    }
    
    const removeItem = () => {
      const trimmed = inputVal.value.trim();
      
      if (trimmed && items.value.delete(trimmed)) {
        inputVal.value = "";
      }
    }
</script>

<template>
  <div>
    <input
      class="item-input"
      data-testid="item-input"
      v-model="inputVal"
      @keydown.enter="addItem()"
    />
    <button 
      class="add-button"
      data-testid="add-button"
      @click="addItem()" 
    >
      Add item
    </button>
    <button 
      class="remove-button"
      data-testid="remove-button"
      @click="removeItem()" 
    >
      Remove item
    </button>
    <button 
      class="clear-button"
      data-testid="clear-button"
      @click="clear()" 
    >
      Clear
    </button>
    <ul class="items" data-testid="items">
      <li v-for="item in getItems()" :key="item">
        {{item}}
      </li>
    </ul>
  </div>
</template>