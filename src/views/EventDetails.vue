<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>
      {{ event.time }} on {{ event.date }} @
      {{ event.location }}
    </p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useEventStore } from "@/store/EventStore";
import { EventItem } from "../types";

const eventStore = useEventStore();

const props = defineProps<{ id: number; event: EventItem }>();

eventStore.fetchEvent(props.id).catch((error: string[]) => {
  this.$router.push({
    name: "ErrorDisplay",
    params: { error: error },
  });
});
</script>
