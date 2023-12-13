import { User } from "@app/components/interfaces/user";

export interface Message {
  id: string;
  text: string;
  from: User;
  sourceReply?: Message
}
