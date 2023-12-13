import { ImageStyle, StyleSheet } from 'react-native';

export type AvatarStyle = {
  image: ImageStyle;
}

export default (): AvatarStyle => {
  return StyleSheet.create({
    image: {
      width: 50,
      height: 50,
      borderRadius: 50,
    },
  });
}
