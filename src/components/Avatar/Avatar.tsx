import { Image, View } from 'react-native';
import defaultStyles from './styles';

const Avatar = () => {
  const styles = defaultStyles();

  return (
    <View>
      <Image
        style={styles.image}
        source={require('../../assets/img/cat-avatar.jpeg')}
      />
    </View>
  );
}

export default Avatar;
