import { Topics } from "./TopicEnum";

export interface ExpirationCompleteEvent {
  topic: Topics.ExpirationComplete;
  data: {
    orderId: string;
  };
}
