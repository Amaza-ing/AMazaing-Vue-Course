<script setup></script>

<template>
  <header class="header">
    <h1>Movies</h1>

    <nav>
      <ul class="nav-list">
        <li>
          <router-link class="link" to="/">Home</router-link>
        </li>
        <li class="link">
          <router-link class="link" to="/movies">Movies</router-link>
        </li>
        <li class="link">
          <router-link class="link" :to="{ name: 'create' }">Create Movie</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header {
  background-color: #000022;
  color: white;
  text-align: center;
  padding: 20px;

  .nav-list {
    display: flex;
    justify-content: space-around;

    .link {
      color: white;
      text-decoration: none;
    }
  }
}
</style>
