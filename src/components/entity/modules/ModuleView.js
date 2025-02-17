import { StyleSheet, Text, View, Alert, Vibration, ScrollView } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import { Button, ButtonTray } from '../../UI/Button';
import Icons from '../../UI/Icons';


const ModuleView = ({ module, onDelete, onModify }) => {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  const handleDelete = () => onDelete(module);

  const requestDelete = () => Alert.alert(
    'Delete Warning',
    `Are you sure that you want to delete Module ${module.ModuleCode} ${module.ModuleName}?`,
    [
      { text: 'No, Cancel' },
      { text: 'Yes, Delete', onPress: handleDelete }
    ]
  )

  const handleLongVibrate = () => {
    // The pattern is vibrate for 500ms and pause for 500ms, repeated 10 times
    const pattern = Array(10).fill(500).flatMap(v => [v, v]);
    Vibration.vibrate(pattern);
  };


  // View ----------------------------------------
    return (
      <ScrollView contentContainerstyle ={styles.container}>
        <FullWidthImage source={{ uri: module.ModuleImage }} style={styles.image} /> 

        <View style={styles.infoTray}>
          <Text style={styles.boldText}>
            {module.ModuleCode} {module.ModuleName}
            </Text>
          <Text style={styles.text}>Level {module.ModuleLevel} </Text>
          <Text style={styles.text} > 
            {module.ModuleLeaderName} <Text style={styles.dimText}> (Module Leader) </Text>
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
            <Text style={styles.boldText}>Assignments: </Text>
            {module.ModuleAssignments ? (
              module.ModuleAssignments.split(',').map((assignments, index) => (
            <Text style={styles.text} key={index}>
              - {assignments.trim()}
            </Text>
            ))
            ) : (
              <Text style={styles.text}>No Assignments Listed</Text>
            )}
            <View style={styles.vibrationButtonContainer}>
              <Button 
              label="Caution: Bigger jiggle!"
              icon={<Icons.CautionVibration />} 
              onClick={() => handleLongVibrate()} 
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
          },
          boldText: {
            fontSize: 24,
            fontWeight: 'bold',
          },
          dimText: {
            color: 'grey',
          },
          vibrationButtonContainer: {
            marginTop: 45,
            width: '100%',
            paddingHorizontal: 40,
            alignItems: 'center',
            height: '20%',
          }
    });

export default ModuleView;
