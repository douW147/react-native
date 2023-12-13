import { Text, View } from 'react-native';
import defaultStyles from './styles';
import IconButton from './../../../components/IconButton/IconButton';
import BackButton from '@app/components/BackButton/BackButton';

function ChatBar() {
  const style = defaultStyles();

  return (
    <>
      <View style={style.root}>
        <View style={style.backButton}>
          <BackButton
            iconName={'chevron-left'}
            label={'Chat'}
          />
        </View>
        <View style={style.mainSection}>
          <Text style={style.title}>
            Instamobile Team
          </Text>
        </View>
        <View style={style.settingsButton}>
          <IconButton
            name={'settings'}
            size={25}
          />
        </View>
      </View>
    </>
  )
}

export default ChatBar;
