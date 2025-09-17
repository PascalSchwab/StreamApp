<template>
<nav class="navbar">
    <RouterLink to="/" class="tab" active-class="active">Home</RouterLink>
    <RouterLink to="/stream" class="tab" active-class="active">Stream</RouterLink>
    <RouterLink to="/obs" class="tab" active-class="active">Obs</RouterLink>
    <RouterLink to="/settings" class="tab" active-class="active">Settings</RouterLink>
</nav>
</template>

<script setup>
import { RouterLink } from "vue-router"
</script>


<style>
.navbar {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #222;
}

.nav-link {
  color: #bbb;
  text-decoration: none;
  font-weight: 500;
}

.nav-link:hover {
  color: white;
}

.active {
  color: #42b883;
  font-weight: bold;
}
</style>