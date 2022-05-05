<template>
  <h1>{{ eventStore.numberOfEvents }} Events for Good</h1>
  <div class="events">
    <EventCardVue
      v-for="(event, id) in eventStore.events"
      :key="id"
      :event="event"
    />
  </div>
</template>

<script setup lang="ts">
// @ is an alias to /src
import EventCardVue from "@/components/EventCard.vue";
import { useEventStore } from "../store/EventStore";

const eventStore = useEventStore();

eventStore.fetchEvents();
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
