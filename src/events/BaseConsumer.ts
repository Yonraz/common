import { Kafka, EachMessagePayload, Consumer } from "kafkajs";
import { Topics } from "./TopicEnum";

interface Event {
  topic: Topics;
  data: any;
}

export abstract class BaseConsumer<T extends Event> {
  abstract topic: T["topic"];
  abstract groupId: string;
  abstract onMessage(
    data: T["data"],
    payload: EachMessagePayload
  ): Promise<void>;

  protected client: Kafka;
  protected consumer: Consumer | undefined;

  constructor(kafkaClient: Kafka) {
    this.client = kafkaClient;
  }

  async consume() {
    this.consumer = this.client.consumer({
      groupId: this.groupId,
    });
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: this.topic, fromBeginning: true });

    await this.consumer.run({
      autoCommit: false,
      eachMessage: async (payload: EachMessagePayload) => {
        console.log(`Message received: ${this.topic} / ${this.groupId}`);
        const parsedData = this.parseMessage(payload);
        try {
          await this.onMessage(parsedData, payload);
          await this.commitOffset(payload);
        } catch (err) {
          if (err instanceof Error) console.error(err.message);
        }
      },
    });
  }

  parseMessage(payload: EachMessagePayload) {
    const { message } = payload;
    const data = message.value?.toString();
    return data ? JSON.parse(data) : null;
  }

  async commitOffset(payload: EachMessagePayload) {
    if (this.consumer) {
      const { topic, partition, message } = payload;
      const offset = (parseInt(message.offset, 10) + 1).toString();

      await this.consumer.commitOffsets([{ topic, partition, offset }]);
    }
  }

  async close() {
    if (this.consumer) {
      await this.consumer.disconnect();
      console.log("Kafka connection closed!");
    }
  }
}
