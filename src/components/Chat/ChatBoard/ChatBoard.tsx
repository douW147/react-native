import { ScrollView } from "react-native";
import defaultStyles from './styles';
import { Message } from "@app/components/interfaces/Message";
import ChatMessage from "../ChatMessage/ChatMessage";

interface ChatBoardProps {
  messages: Message[];
  userId: string;
};

const ChatBoard = ({ messages, userId }: ChatBoardProps) => {
  const styles = defaultStyles();

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {messages.map((message) => 
        <ChatMessage
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

export default ChatBoard;
