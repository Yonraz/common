import { Topics } from "./TopicEnum";

export interface TicketCreatedEvent {
  topic: Topics.TicketCreated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
