import { Topics } from "./TopicEnum";
import { Genre } from "./types/genre-enum";

export interface VinylUpdatedEvent {
  topic: Topics.VinylUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
    version: number;
    genre: Genre;
    description: string;
    orderId?: string;
  };
}
