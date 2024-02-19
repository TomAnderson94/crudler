import { useState } from 'react';
import { StyleSheet, LogBox, Vibration, View } from 'react-native';
import Screen from '../layout/screen';
import initialUsers from '../../data/users.js';
import UserList from '../entity/users/UserList.js';
import { ButtonTray, Button } from '../UI/Button.js';
import Icons from '../UI/Icons.js';

export const UserListScreen = ({navigation}) => {

  // Initialisation ------------------------------
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']); 

  // State ---------------------------------------
  const [ users, setUsers ] = useState(initialUsers);
  const [isSorted, setIsSorted] = useState(false);

  // Handlers ------------------------------------
  const handleDelete = (user) => {
    setUsers(users.filter((item) => item.UserID !== user.UserID));
      console.log(`User ${user.UserID} deleted`);
  };

  const onDelete =(user) => {
    handleDelete(user);
    navigation.goBack();
  };

  const onAdd =(user) => {
    handleAdd(user);
    navigation.goBack();
  };

  const onModify = (user) => {
    handleModify(user);
    navigation.navigate("UserListScreen");
  };

  const handleAdd = (user) => setUsers( [...users, user]);

  const handleModify = (updatedUser) => setUsers(
    users.map((user) => (user.UserID === updatedUser.UserID) ? updatedUser : user)
  );

  const handleSortToggle = () => {
    if (isSorted) {
        setUsers(initialUsers);
    } else {
        const sortedUsers = [...users].sort((a, b) => a.UserFirstname.localeCompare(b.UserFirstname));
        setUsers(sortedUsers);
    }
    setIsSorted(!isSorted);
  };

  const handleVibrate = (duration) => {
    Vibration.vibrate(duration); // vibrate for (x) ms
  };

  const goToViewScreen = (user) => navigation.navigate('UserViewScreen', {
    user: user,
    onDelete: onDelete,
    onModify: onModify,
    handleVibrate: handleVibrate
  }); 
  console.log("All Users: ", users);

  const goToAddScreen = () => navigation.navigate('UserAddScreen', {onAdd});

  // View ----------------------------------------
  return (
    <Screen>
      <View style={styles.buttonTrayContainer}>
        <ButtonTray >
          <Button 
          label="Add User" 
          icon={<Icons.Add />} 
          onClick={goToAddScreen}
          styleButton={{backgroundColor: '#003366'}}
          styleLabel={{color: '#FFFFFF'}}
          />
          <Button 
          label={isSorted ? "Standard View" : "Sort by Name"} 
          icon={<Icons.Sort />} 
          onClick={handleSortToggle}
          styleButton={{backgroundColor: '#6A5ACD'}}
          styleLabel={{color: '#FFFFFF'}}
          />
        </ButtonTray>
      </View>
      <UserList users={users} onSelect={goToViewScreen}/>
      <View style={styles.vibrationButtonContainer}>
        <Button 
        label="Caution: Slight jiggle!"
        icon={<Icons.CautionVibration />} 
        onClick={() => handleVibrate(10000)} 
        styleButton={{backgroundColor: '#FFA500', width: '100%'}}
        styleLabel={styles.boldText}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  vibrationButtonContainer: {
    marginTop: 5,
    width: '100%',
    paddingHorizontal: 40,
    alignItems: 'center',
    height: '20%',
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTrayContainer: {
    paddingTop: 15,
  },
});

export default UserListScreen;
