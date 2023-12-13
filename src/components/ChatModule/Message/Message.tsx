import { Text, View } from "react-native";
import Avatar from "@app/components/Avatar/Avatar";
import defaultStyles from './styles';
import Icon from "react-native-vector-icons/MaterialIcons";
import { User } from "@app/components/interfaces/user";
import { Message } from "@app/components/interfaces/Message";
import ChatAvatar from "../ChatAvatar/ChatAvatar";

export interface MessageProps {
  id: string;
  text: string;
  from: User;
  sourceReply?: Message;
  isMyMessage: boolean;
}

const MessageContainer = ({ id, text, from, sourceReply, isMyMessage }: MessageProps) => {
  const styles = defaultStyles({ isMyMessage });

  return (
    <>
      <View style={styles.root}>
        <View style={styles.content}>
          <View>
            <ChatAvatar />
          </View>
          <View style={styles.contentContainer}>
            {sourceReply && <>
              <View style={styles.iconContainer}>
                <Icon name={'reply'} />
                <Text style={styles.iconText}>
                  You replied to {from.fistName}
                </Text>
              </View>
              <View style={styles.replyContainer}>
                <Text style={styles.replyText}>
                  {sourceReply?.text}
                </Text>
              </View>
            </>}
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {text}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default MessageContainer;
