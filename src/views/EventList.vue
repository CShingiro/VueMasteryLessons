<template>
  <h1>{{ eventStore.numberOfEvents }} Events for Good</h1>
  <div class="events">
    <EventCard
      v-for="event in eventStore.events"
      :key="event.id"
      :event="event"
    />
  </div>
</template>

<script setup lang="ts">
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import { useEventStore } from "../store/EventStore";

const eventStore = useEventStore();

eventStore.fetchEvents().catch((error) => {
  this.$router.push({
    name: "ErrorDisplay",
    params: { error: error },
  });
});
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
