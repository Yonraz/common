import { Topics } from "./TopicEnum";

export interface TicketUpdatedEvent {
    topic: Topics.TicketUpdated;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
    };
}