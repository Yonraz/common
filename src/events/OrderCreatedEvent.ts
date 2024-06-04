import { Topics } from "./TopicEnum";
import { OrderStatus } from "./types/order-status";

export interface OrderCreatedEvent {
  topic: Topics.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
