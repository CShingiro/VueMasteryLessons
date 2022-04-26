<template>
  <h1>{{ $store.getters.numberOfEvents }} Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventList",
  components: {
    EventCard,
  },
  created() {
    this.$store.dispatch("fetchEvents").catch((error) => {
      this.$router.push({
        name: "ErrorDisplay",
        params: { error: error },
      });
    });
  },
  computed: {
    events() {
      return this.$store.state.events;
    },
  },
});
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
