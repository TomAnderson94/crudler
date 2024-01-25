import { useState } from 'react';
import { StyleSheet, LogBox, Navigation } from 'react-native';
import Screen from '../layout/screen';
import initialModules from '../../data/modules.js';
import ModuleList from '../entity/modules/ModuleList.js';
import { ButtonTray, Button } from '../UI/Button.js';
import Icons from '../UI/Icons.js';

export const ModuleListScreen = ({navigation}) => {

  // Initialisation ------------------------------
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']); 

  // State ------------------------------
  const [ modules, setModules ] = useState(initialModules);

  // Handlers ------------------------------
  const handleDelete = (module) => {
      setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
      console.log(`Module ${module.ModuleCode} deleted`);
  };

  const onDelete =(module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd =(module) => {
    handleAdd(module);
    navigation.goBack();
  }

  const onModify =(module) => {
    handleModify(module);
    navigation.navigate("ModuleListScreen");
  };
  const handleAdd = (module) => setModules( [...modules, module]);

  const handleModify = (updatedModule) => setModules(
    modules.map((module) => (module.ModuleID === updatedModule.ModuleID) ? updatedModule : module)
  );

  const goToViewScreen = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete, onModify } );
  const goToAddScreen = () => navigation.navigate('ModuleAddScreen', {onAdd});

  // View ------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add Module" icon={<Icons.Add />} onClick={goToAddScreen} />
      </ButtonTray>
      <ModuleList modules={modules} onSelect={goToViewScreen}/>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
