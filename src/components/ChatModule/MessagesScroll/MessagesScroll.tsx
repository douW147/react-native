import { ScrollView } from "react-native";
import defaultStyles from './styles';
import { Message } from "@app/components/interfaces/Message";
import MessageContainer from "../Message/Message";

interface MessagesScrollProps {
  messages: Message[];
  userId: string;
};

const MessagesScroll = ({ messages, userId }: MessagesScrollProps) => {
  const styles = defaultStyles();

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {messages.map((message) => 
        <MessageContainer
          id={message.id}
          key={message.id}
          text={message.text}
          from={message.from}
          sourceReply={message.sourceReply}
          isMyMessage={userId === message.from.id}
        />
      )}
    </ScrollView>
  );
}

export default MessagesScroll;
