import { View } from 'react-native';
import defaultStyles from './styles';
import { useState } from 'react';
import { Message } from '@app/components/interfaces/Message';
import ChatBar from '../ChatBar/ChatBar';
import MessagesScroll from '../MessagesScroll/MessagesScroll';
import MessageSender from '../MessageSender/MessageSender';
import { User } from '@app/components/interfaces/user';

const Chat = () => {
  const styles = defaultStyles();
  const users: User[] = [
    { id: '1', fistName: 'Max', lastName: 'Arkhipov' },
    { id: '2', fistName: 'Kolya', lastName: 'Stelmakh' },
    { id: '3', fistName: 'Alex', lastName: 'Stepanenko' },
  ];
  const initialMessage: Message = { id: '1', text: 'Hello', from: users[0] };
  const initialSecondMessage: Message = { id: '2', text: 'Hi, everyone!', from: users[1] };
  const initialMessages: Message[] = [
    { ...initialMessage },
    { ...initialSecondMessage },
    { id: '3', text: 'Nice to meet you', from: users[2] },
    { id: '4', text: 'Nice to see you again', from: users[2], sourceReply: initialMessage },
    { id: '5', text: 'What a pleasure', from: users[0] },
    { id: '6', text: 'The same!', from: users[0], sourceReply: initialSecondMessage  },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleAddMessage = (text: string): void => {
    const id = messages.length + 1;
    const user = users[2];
    const message: Message = {
      id: id.toString(),
      text: text,
      from: user,
    };

    setMessages([...messages, message]);
  };

  return (
    <View style={styles.root}>
      <ChatBar />
      <View style={styles.board}>
        <MessagesScroll messages={messages} userId={'3'} />
      </View>
      <MessageSender onAddMessage={handleAddMessage} />
    </View>
  );
}

export default Chat;
