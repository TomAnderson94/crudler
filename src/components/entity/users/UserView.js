import { StyleSheet, Text, View, Alert, Vibration, ScrollView } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import { Button, ButtonTray } from '../../UI/Button';
import Icons from '../../UI/Icons';


const UserView = ({ user, onDelete, onModify }) => {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  const handleDelete = () => onDelete(user);

  const requestDelete = () => Alert.alert(
    'Delete Warning',
    `Are you sure that you want to delete User ${user.UserID} ${user.UserFirstname} ${user.UserLastname}?`,
    [
      { text: 'No, Cancel' },
      { text: 'Yes, Delete', onPress: handleDelete }
    ]
  );

  const handleGiantVibrate = () => {
    // The pattern is vibrate for 500ms and pause for 500ms, repeated 10 times
    const pattern = Array(10).fill([1000, 100]).flat();
    Vibration.vibrate(pattern);
  };

  // View --------------------------------------
    return (
      <ScrollView contentContainerstyle ={styles.container}>
        <FullWidthImage source={{ uri: user.UserImageURL }} style={styles.image} /> 

        <View style={styles.infoTray}>
          <Text>
            <Text style={styles.dimText}> {user.UserID} </Text>
            <Text style={styles.boldText}> {user.UserFirstname} {user.UserLastname} </Text>
          </Text> 
          <Text style={styles.text}>Email: {user.UserEmail} </Text>
          <Text style={styles.text}> 
            {user.UserType} <Text style={styles.dimText}> {user.UserYear} </Text>
          </Text>
        </View>

        <ButtonTray>
          <Button 
          icon={<Icons.Edit />} 
          label="Modify" 
          onClick={onModify}
          styleButton={{ backgroundColor: '#90EE90', padding: 5, width: '40%' }} 
          styleLabel={{ color:'#006400'}}
          />
          <Button 
          icon={<Icons.Delete />}
          label="Delete" 
          onClick={requestDelete}
          styleButton={{ backgroundColor:'#FF7F7F', padding: 5, width: '40%' }} 
          styleLabel={{ color:'#8B0000'}}
          />
          </ButtonTray>

          <View style={styles.infoTray}>
            <Text style={styles.boldText}>Courses: </Text>
            {user.CourseName ? (
              user.CourseName.split(',').map((courses, index) => (
                <Text style={styles.text} key={index}>
                  - {courses.trim()}
                </Text>
              ))
            ) : (
              <Text style={styles.text}>No Courses Listed</Text>
            )}
            <View style={styles.vibrationButtonContainer}>
              <Button 
              label="Caution: Giant jiggle!"
              icon={<Icons.CautionVibration />} 
              onClick={() => handleGiantVibrate()} 
              styleButton={{backgroundColor: '#FFA500', width: '100%'}}
              styleLabel={styles.boldText}
              />
            </View>
          </View>
      </ScrollView>
    );
};

    const styles = StyleSheet.create({
        container: {
            gap: 15,
          },
        image: {
            borderRadius: 3,
          },
        infoTray: {
            gap: 5,
          },
        text: {
            fontSize: 20,
            paddingBottom: 3,
          },
        boldText: {
            fontSize: 24,
            fontWeight: 'bold',
            paddingBottom: 5,
        },
        dimText: {
            color: 'grey',
        },
        vibrationButtonContainer: {
            marginTop: 10,
            width: '100%',
            paddingHorizontal: 40,
            alignItems: 'center',
            height: '20%',
        }
    });

export default UserView;
