<template>
  <div v-if="eventStore.event">
    <h1>{{ eventStore.event.title }}</h1>
    <p>{{ eventStore.event.time }} on {{ eventStore.event.date }} @ {{ eventStore.event.location }}</p>
    <p>{{ eventStore.event.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { useEventStore } from "@/store/EventStore";

  interface Props {
    id: number | null;
  }

  const props = withDefaults(defineProps<Props>(), {
    id: null
  });

  const eventStore = useEventStore();
  eventStore.fetchEvent(props.id).catch((error: unknown) => {
      this.$router.push({
        name: "ErrorDisplay",
        params: { error: error },
      });
    });
</script>
