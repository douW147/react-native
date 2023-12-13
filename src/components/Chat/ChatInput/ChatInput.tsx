import { TextInput, View } from "react-native";

import defaultStyles from './styles';
import { useState } from "react";
import IconButton from "./../../../components/IconButton/IconButton";

interface ChatInputProps {
  onPressEnter: (text: string) => void;
};

const ChatInput = ({ onPressEnter }: ChatInputProps) => {
  const styles = defaultStyles();
  const [textInput, setTextInput] = useState<string>('')

  const handleSubmitEditing = (): void => {
    onPressEnter(textInput);
    setTextInput('');
  };

  const handleChangeText = (text: string): void => {
    setTextInput(text);
  };

  return (
    <>
      <View style={styles.root}>
        <IconButton
          name={'mic'}
          size={22}
        />
        <TextInput
          placeholder={"Start typing..."}
          style={styles.textInput}
          value={textInput}
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmitEditing}
        />
      </View>
    </>
  )
}

export default ChatInput;
