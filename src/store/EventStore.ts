import { defineStore } from "pinia";
import EventService from "../services/EventService";
import { StateItem, EventItem } from "../types";

export const useEventStore = defineStore("EventStore", {
  state: () => ({
    user: "Christian Shingiro",
    events: [],
    event: {} as unknown,
  }) as StateItem,
  getters: {
    numberOfEvents: state => state.events.length,
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
    createEvent(event: EventItem) {
      EventService.postEvent(event)
        .then(() => {
          this.event= event;
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchEvent(id: unknown) {
      const existingEvent = this.events.find((event) => event.id === id);
      if (existingEvent) {
        this.event = existingEvent;
      } else {
        EventService.getEvent(id)
          .then((response) => {
            this.event = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    firstName() {
      return this.user.split(' ')[0]
    }
  }
});
