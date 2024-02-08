import { Pressable, StyleSheet, Text, View } from 'react-native';

const UserItem = ({ user, onSelect }) => {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  // View ----------------------------------------
    return (
        <Pressable onPress={() => onSelect(user)} style={{width: '100%' }}>
            <View style={styles.item}>
                <Text>
                    <Text style={styles.typeText}> {user.UserType} </Text>
                    <Text style={styles.text}> {user.UserFirstname} {user.UserLastname} </Text>
                </Text>
                <Text style={styles.dimText}> (Click for details) </Text>
            </View>
        </Pressable>
    );
};

    const styles = StyleSheet.create({
        item: {
            paddingVertical: 10,
            borderBottomWidth: 2,
            borderColor: '#003366',
            width: '100%',
            alignItems: 'center',
        },
        text: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        dimText: {
            color: 'grey',
            fontSize: 10,
        },
        typeText: {
            color: 'grey',
            fontSize: 14,
        },
    });

export default UserItem;
