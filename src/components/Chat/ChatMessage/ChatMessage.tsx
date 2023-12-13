import { Text, View } from "react-native";
import Avatar from "@app/components/Avatar/Avatar";

import defaultStyles from './styles';
import Icon from "react-native-vector-icons/MaterialIcons";
import { User } from "@app/components/interfaces/user";
import { Message } from "@app/components/interfaces/Message";

export interface ChatMessageProps {
  id: string
  text: string
  from: User,
  sourceReply?: Message
  isMyMessage: boolean
}

const ChatMessage = ({ id, text, from, sourceReply, isMyMessage }: ChatMessageProps) => {
  const styles = defaultStyles({ isMyMessage });

  return (
    <>
      <View style={styles.root}>
        <View style={styles.content}>
          <View>
            <Avatar />
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

export default ChatMessage;
