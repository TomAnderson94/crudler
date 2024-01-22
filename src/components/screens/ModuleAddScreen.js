import { StyleSheet, Text,  } from 'react-native';
import Screen from '../layout/screen';
import { ButtonTray, Button } from '../UI/Button.js';
import Icons from '../UI/Icons.js';


const defaultModule = {
  ModuleID: 999,
  ModuleCode: 'CI6330',
  ModuleName: 'Mob App Dev',
  ModuleLevel: 6,
  ModuleLeaderID: 1,
  ModuleLeaderName: 'Graeme JONES',
  ModuleImage: 'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg'

};


export const ModuleAddScreen = ({ navigation, route }) => {
  // Initialisation ------------------------------
  const { onAdd } = route.params;

  // State ------------------------------

  // Handlers ------------------------------
  const handleAdd = () => onAdd(defaultModule);
  const handleCancel = navigation.goBack;

  // View ------------------------------
  return (
    <Screen>
      <Text>Add</Text>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
        <Button label="Cancel" onClick={handleCancel} />

      </ButtonTray>

    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ModuleAddScreen;
