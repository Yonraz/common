import { Topics } from "./TopicEnum";
import { OrderStatus } from "./types/order-status";

export interface OrderCreatedEvent {
  topic: Topics.OrderCreated;
  data: {
    id: string;
    version: number;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    vinyl: {
      id: string;
      price: number;
    };
  };
}
