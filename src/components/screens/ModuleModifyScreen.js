import { StyleSheet } from 'react-native';
import Screen from '../layout/screen';
import ModuleForm from '../entity/modules/ModuleForm';

export const ModuleModifyScreen = ({ navigation, route }) => {
  // Initialisation ------------------------------
  const {module, onModify} = route.params;

  // State ---------------------------------------
  // Handlers ------------------------------------
  const handleCancel = navigation.goBack;

  // View ----------------------------------------
  return (
    <Screen>
      <ModuleForm originalModule={module} onSubmit={onModify} onCancel={handleCancel}/>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ModuleModifyScreen;
