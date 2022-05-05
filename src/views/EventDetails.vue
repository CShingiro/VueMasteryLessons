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
import { useEventStore } from "@/store/EventStore";
import { EventItem } from "../types";
import { defineProps } from "vue";

const eventStore = useEventStore();

const props = defineProps<{ id: number; event: EventItem }>();

props.event;
props.id;

eventStore.fetchEvent(props.id)
</script>
