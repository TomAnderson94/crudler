import { ScrollView, StyleSheet, View } from 'react-native';
import UserItem from './UserItem';


const UserList = ({ users, onSelect }) => {
  // Initialisation ------------------------------
  
  // State ---------------------------------------


  // Handlers ------------------------------------


  // View ----------------------------------------
    return (
        <ScrollView style={styles.container}>
            {users.map((user) =>{
                return(
                    <View key={user.UserID} style={styles.userRow}>
                        <UserItem user={user} onSelect={onSelect} />
                    </View>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    userRow: {
        flexDirection: 'column',
        paddingVertical: 5,
        width: '100%',
    },
});



export default UserList;
