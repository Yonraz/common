import { Topics } from "./TopicEnum";
import { Genre } from "./types/genre-enum";

export interface VinylCreatedEvent {
  topic: Topics.VinylCreated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
    genre: Genre;
    description: string;
    version: number;
  };
}
