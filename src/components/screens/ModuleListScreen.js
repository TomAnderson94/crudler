import { useState } from 'react';
import { StyleSheet, LogBox, Vibration, View } from 'react-native';
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
  const [isSorted, setIsSorted] = useState(false);

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

  const onModify = (module) => {
    handleModify(module);
    navigation.navigate("ModuleListScreen");
  };
  const handleAdd = (module) => setModules( [...modules, module]);

  const handleModify = (updatedModule) => setModules(
    modules.map((module) => (module.ModuleID === updatedModule.ModuleID) ? updatedModule : module)
  );

  const handleSortToggle = () => {
    if (isSorted) {
        setModules(initialModules);
    } else {
        const sortedModules = [...modules].sort((a, b) => a.ModuleName.localeCompare(b.ModuleName));
        setModules(sortedModules);
    }
    setIsSorted(!isSorted);
};

const handleVibrate = (duration) => {
  Vibration.vibrate(duration); // vibrate for (x) ms
}

  const goToViewScreen = (module) => navigation.navigate('ModuleViewScreen', {
    module: module,
    onDelete: onDelete,
    onModify: onModify,
    handleVibrate: handleVibrate
  });
  const goToAddScreen = () => navigation.navigate('ModuleAddScreen', {onAdd});

  // View ------------------------------
  return (
    <Screen>
      <View style={styles.buttonTrayContainer}>
        <ButtonTray >
          <Button 
          label="Add Module" 
          icon={<Icons.Add />} 
          onClick={goToAddScreen}
          styleButton={{backgroundColor: '#003366'}}
          styleLabel={{color: '#FFFFFF'}}
          />
          <Button 
          label={isSorted ? "Standard View" : "Sort by Name"} 
          icon={<Icons.Sort />} 
          onClick={handleSortToggle}
          styleButton={{backgroundColor: '#6A5ACD'}}
          styleLabel={{color: '#FFFFFF'}}
          />
        </ButtonTray>
      </View>
      <ModuleList modules={modules} onSelect={goToViewScreen}/>
      <View style={styles.vibrationButtonContainer}>
        <Button 
        label="Caution: Slight jiggle!"
        icon={<Icons.CautionVibration />} 
        onClick={() => handleVibrate(10000)} 
        styleButton={{backgroundColor: '#FFA500', width: '100%'}}
        styleLabel={styles.boldText}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  vibrationButtonContainer: {
    marginTop: 5,
    width: '100%',
    paddingHorizontal: 40,
    alignItems: 'center',
    height: '20%',
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTrayContainer: {
    paddingTop: 15,
  },
});

export default ModuleListScreen;
