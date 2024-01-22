import { useState } from 'react';
import { StyleSheet, LogBox } from 'react-native';
import Screen from '../layout/screen';
import initialModules from '../../data/modules.js';
import ModuleList from '../entity/modules/ModuleList.js';

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
  }


  const handleSelect = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete } );

  // View ------------------------------
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect}/>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
