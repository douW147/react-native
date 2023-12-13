import React from 'react';
import { View } from "react-native";
import ChatScreen from './screens/ChatScreen/ChatScreen';

function App(): React.ReactElement {
  return (
    <>
      <View style={{ flex: 1, paddingTop: 20, paddingBottom: 20 }}>
        <ChatScreen />
      </View>
    </>
  );
}

export default App;
