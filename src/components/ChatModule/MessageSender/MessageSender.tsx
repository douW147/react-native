import { View } from "react-native";
import MessageInput from "../MessageInput/ChatInput";
import defaultStyles from './styles';
import IconButton from "../../IconButton/IconButton";

interface MessageSenderProps {
  onAddMessage: (text: string) => void;
};

const MessageSender = ({ onAddMessage }: MessageSenderProps) => {
  const styles = defaultStyles();

  const handlePressEnter = (text: string): void => {
    onAddMessage(text);
  };

  return (
    <>
      <View style={styles.root}>
        <View>
          <IconButton
            name={'photo-camera'}
            size={25}
          />
        </View>
        <View style={styles.inputContainer}>
          <MessageInput onPressEnter={handlePressEnter} />
        </View>
        <View>
          <IconButton
            name={'send'}
            size={25}
          />
        </View>
      </View>
    </>
  );
}

export default MessageSender;
