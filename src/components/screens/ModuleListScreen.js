import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../layout/screen';
import initialModules from '../../data/modules.js';
import ModuleList from '../entity/modules/ModuleList.js';

export const ModuleListScreen = () => {

  // Initialisation ------------------------------
  //let modules = initialModules;
 

  // State ------------------------------
  const [ modules, setModules ] = useState(initialModules);

  // Handlers ------------------------------
  const handleDelete = (module) => 
  setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));


  // View ------------------------------
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleDelete}/>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
