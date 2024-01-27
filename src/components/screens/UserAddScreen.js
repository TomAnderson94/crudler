import { StyleSheet } from 'react-native';
import Screen from '../layout/screen';
import UserForm from '../entity/users/UserForm';


export const UserAddScreen = ({ navigation, route }) => {
  // Initialisation ------------------------------
  const { onAdd } = route.params;

  // State ---------------------------------------

  // Handlers ------------------------------------
  const handleCancel = navigation.goBack;

  // View ----------------------------------------
  return (
    <Screen>
      <UserForm onSubmit={onAdd} onCancel={handleCancel}/>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default UserAddScreen;
