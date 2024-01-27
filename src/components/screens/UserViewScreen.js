import UserView from '../entity/users/UserView';
import { StyleSheet } from 'react-native';
import Screen from '../layout/screen';

export const UserViewScreen = ({navigation, route}) => {
  // Initialisation ------------------------------
  const { user, onDelete, onModify, handleVibrate, handleLongVibrate } = route.params;

  // State ---------------------------------

  // Handlers ------------------------------

  const goToModifyScreen = () => navigation.navigate('UserModifyScreen', {user, onModify});



console.log("checking checking: ", user);
  // View ----------------------------------
  return (
    <Screen>
      <UserView 
        user={user} 
        onDelete={onDelete} 
        onModify={goToModifyScreen}
        handleVibrate={handleVibrate}
        handleLongVibrate={handleLongVibrate}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({

});

export default UserViewScreen;
