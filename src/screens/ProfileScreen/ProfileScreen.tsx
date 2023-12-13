import { View } from "react-native";
import Avatar from "@app/components/Avatar/Avatar";

import defaultStyles from './styles';
import ProfileTextContainer, {
  ProfileTextContainerProps
} from "@app/components/Profile/ProfileTextContainer/ProfileTextContainer";

function ProfileScreen() {
  const styles = defaultStyles();

  const textContainers: ProfileTextContainerProps[] = [
    { title: 'Освітній ступінь', description: 'Бакалавр' },
    { title: 'Факультет', description: 'Факультет робототехніки та машинобудування' },
    { title: 'Спеціальність', description: '125 - Кібербезпека' },
    { title: 'Освітня програма', description: 'Кібербезпека' },
    { title: 'Хобі', description: 'Програмування, спорт, подорожі' },
  ];

  const source = require('@app/assets/img/my-avatar.jpeg');

  return (
    <>
      <View style={styles.root}>
        <Avatar source={source} size={100} />
        <View style={styles.textContainers}>
          {textContainers.map((textContainer, index) => 
            <ProfileTextContainer
              key={index}
              title={textContainer.title}
              description={textContainer.description}
            />
          )}
        </View>
      </View>
    </>
  )
}

export default ProfileScreen;
