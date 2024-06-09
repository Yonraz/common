import { Topics } from "./TopicEnum";

export interface OrderCancelledEvent {
  topic: Topics.OrderCancelled;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
