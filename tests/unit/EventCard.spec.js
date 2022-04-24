import { mount } from "@/vue/test-utils";
import EventCard from "@/components/EventCard";

describe("EventCard", () => {
  it(`renders the event's date successfully`, () => {
    const event = {
      id: 1,
      time: "12:00PM",
      date: "September 19th, 2022",
      title: "Coaching little league",
    };
    mount(EventCard, {
      props: {
        event,
      },
    });
  });
});
