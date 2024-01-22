import ModuleView from '../entity/modules/ModuleView';
import { StyleSheet } from 'react-native';
import Screen from '../layout/screen';

export const ModuleViewScreen = ({navigate, route}) => {
  // Initialisation ------------------------------
  const { module, onDelete } = route.params;

  // State ------------------------------

  // Handlers ------------------------------
console.log("checking checking: ", module);
  // View ------------------------------
  return (
    <Screen>
      <ModuleView module={module} onDelete={onDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({

});

export default ModuleViewScreen;
