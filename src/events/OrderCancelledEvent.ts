import { Topics } from "./TopicEnum";

export interface OrderCancelledEvent {
  topic: Topics.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
