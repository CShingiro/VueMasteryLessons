export interface StateItem {
  user: string;
  events: EventItem[];
  event: EventItem;
}

export interface EventItem {
  id: number | null | string;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  organizer: string;
}
