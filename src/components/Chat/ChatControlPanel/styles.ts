import { StyleSheet, ViewStyle } from "react-native";

export interface ChatControlPanelStyles {
  root: ViewStyle;
  inputContainer: ViewStyle;
}

export default (): ChatControlPanelStyles => {
  return StyleSheet.create({
    root: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopColor: '#ddd',
      borderTopWidth: 1,
      paddingTop: 10,
      marginBottom: -5,
      paddingLeft: 10,
      paddingRight: 10,
    },
    inputContainer: {
      width: '82%',
    },
  });
}
