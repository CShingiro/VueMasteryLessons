<template>
  <h1>Create an event</h1>

  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <label>Select a category: </label>
      <select v-model="eventStore.event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === eventStore.event.category"
        >
          {{ option }}
        </option>
      </select>

      <h3>Name & describe your event</h3>

      <label>Title</label><br />
      <input
        v-model="eventStore.event.title"
        type="text"
        placeholder="Title"
      /><br /><br />

      <label>Description</label><br />
      <input
        v-model="eventStore.event.description"
        type="text"
        placeholder="Description"
      /><br />

      <h3>Where is your event?</h3>

      <label>Location</label><br />
      <input
        v-model="eventStore.event.location"
        type="text"
        placeholder="Location"
      /><br />

      <h3>When is your event?</h3>
      <label>Date</label><br />
      <input
        v-model="eventStore.event.date"
        type="text"
        placeholder="Date"
      /><br /><br />

      <label>Time</label><br />
      <input
        v-model="eventStore.event.time"
        type="text"
        placeholder="Time"
      /><br /><br />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { useEventStore } from "@/store/EventStore";
import { reactive } from "vue";

const eventStore = useEventStore();
const categories = [
  "sustainability",
  "nature",
  "animal welfare",
  "housing",
  "education",
  "food",
  "community",
];
eventStore.event = reactive({
  id: "",
  category: "",
  title: "",
  description: "",
  location: "",
  date: "",
  time: "",
  organizer: "",
});
function onSubmit() {
  const event = {
    ...eventStore.event,
    id: uuidv4(),
    organizer: eventStore.user,
  };
  eventStore.createEvent(event);
}
</script>
