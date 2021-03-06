import { defineStore } from "pinia";
import EventService from "../services/EventService";
import { EventItem } from "../types";

export const useEventStore = defineStore("EventStore", {
  state: () => ({
    user: "Christian Shingiro",
    events: [] as EventItem[],
    event: {} as EventItem,
  }),
  getters: {
    numberOfEvents: (state) => state.events.length,
  },
  actions: {
    fetchEvents() {
      return EventService.getEvents()
        .then((response) => {
          this.events = response.data;
        })
        .catch((error) => {
          throw error;
        });
    },
    createEvent(event: any) {
      EventService.postEvent(event)
        .then(() => {
          this.event = event;
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchEvent(id: any) {
      const existingEvent = this.events.find((event) => event.id === id);
      if (existingEvent) {
        this.event = existingEvent;
      } else {
        EventService.getEvent(id)
          .then((response) => {
            this.event = response.data;
          })
          .catch((error) => {
            throw error;
          });
      }
    },
  },
});
