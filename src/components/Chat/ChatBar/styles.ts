import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export type ChatBarStyle = {
  root: ViewStyle
  mainSection: ViewStyle
  title: TextStyle,
  backButton: ViewStyle,
  settingsButton: ViewStyle,
}

export default (): ChatBarStyle => {
  return StyleSheet.create({
    root: {
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    mainSection: {
      width: '50%',
    },
    settingsButton: {
      marginRight: 10,
    },
    backButton: {
      marginLeft: -5,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
    },
  });
};
