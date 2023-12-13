import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";

export type ChatMessageStyle = {
  root: ViewStyle;
  content: ViewStyle;
  contentContainer: ViewStyle;
  iconContainer: ViewStyle;
  iconText: TextStyle;
  replyContainer: ViewStyle;
  replyText: TextStyle;
  textContainer: ViewStyle;
  text: TextStyle;
};

export default ({ isMyMessage }: { isMyMessage: boolean}): ChatMessageStyle => {
  return StyleSheet.create({
    root: {
      maxWidth: '100%',
      width: '100%',
      flexDirection: 'row',
      justifyContent: isMyMessage ? 'flex-end' : 'flex-start',
    },
    content: {
      flexDirection: isMyMessage ? 'row-reverse' : 'row',
      alignItems: 'flex-end',
      maxWidth: '75%',
      width: '100%',
      gap: 10,
    },
    contentContainer: {
      alignItems: isMyMessage ? 'flex-end' : 'flex-start',
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      paddingBottom: 5,
    },
    iconText: {
      color: '#666'
    },
    replyContainer: {
      padding: 10,
      backgroundColor: '#eee',
      borderRadius: 7,
      paddingBottom: 30,
      marginBottom: -20,
      marginLeft: isMyMessage ? 0 : -10,
      marginRight: isMyMessage ? -10 : 0,
    },
    replyText: {
      color: '#555',
      fontSize: 16,
    },
    textContainer: {
      padding: 12,
      backgroundColor: '#ddd',
      borderRadius: 7,
    },
    text: {
      color: '#111',
      fontSize: 18,
    },
  });
}
