<script setup lang="ts">
import { useEventStore } from "./store/EventStore";

const eventStore = useEventStore();
</script>

<template>
  <nav>
    <router-link :to="{ name: 'EventList' }">Events</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'EventCreate' }">Create Event</router-link>
  </nav>
  <router-view />
  <p>Logged in as {{ eventStore.user }}</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
h4 {
  font-size: 20px;
}
</style>
