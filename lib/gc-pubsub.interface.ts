import { ClientConfig } from '@google-cloud/pubsub';
import { Deserializer, Serializer } from '@nestjs/microservices';
import { PublishOptions } from '@google-cloud/pubsub/build/src/publisher';
import { SubscriberOptions } from '@google-cloud/pubsub/build/src/subscriber';
import { CreateSubscriptionOptions } from '@google-cloud/pubsub/build/src/subscription';

export type NewSubscriptionFlag = true | false;

export interface GCPubSubOptions<T extends NewSubscriptionFlag = false> {
  client?: ClientConfig;
  topic?: string;
  replyTopic?: string;
  subscription?: string;
  replySubscription?: string;
  noAck?: boolean;
  init?: boolean;
  useAttributes?: boolean;
  checkExistence?: boolean;
  publisher?: PublishOptions;
  subscriber?: T extends true ? CreateSubscriptionOptions : SubscriberOptions;
  serializer?: Serializer;
  deserializer?: Deserializer;
  newSubscription?: T;
}
