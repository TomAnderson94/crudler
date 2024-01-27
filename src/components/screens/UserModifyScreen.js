import { StyleSheet} from 'react-native';
import Screen from '../layout/screen';
import UserForm from '../entity/users/UserForm';

export const UserModifyScreen = ({ navigation, route }) => {
  // Initialisation ------------------------------
  const {user, onModify} = route.params;

  // State ------------------------------

  // Handlers ------------------------------
  const handleCancel = navigation.goBack;

  // View ------------------------------
  return (
    <Screen>

      <UserForm originalUser={user} onSubmit={onModify} onCancel={handleCancel}/>

    </Screen>
  );
}

const styles = StyleSheet.create({});

export default UserModifyScreen;
