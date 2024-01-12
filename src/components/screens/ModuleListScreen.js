import { StyleSheet } from 'react-native';
import Screen from '../layout/screen';
import initialModules from '../../data/modules.js';
import ModuleList from '../entity/modules/ModuleList.js';

export const ModuleListScreen = () => {

  // Initialisation ------------------------------
  const modules = initialModules;
 

  // State ------------------------------

  // Handlers ------------------------------
  const handleSelect = (module) => alert(`Hi! Item ${module.ModuleCode} Selected!`);
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
