import { ScrollView, StyleSheet, View } from 'react-native';
import ModuleItem from './ModuleItem';


const ModuleList = ({ modules, onSelect }) => {
  // Initialisation ------------------------------
  // State ---------------------------------------


  // Handlers ------------------------------------


  // View ----------------------------------------
    return (
        <ScrollView style={styles.container}>
            {modules.map((module) =>{
                return(
                    <View key={module.ModuleCode} style={styles.moduleRow}>
                        <ModuleItem module={module} onSelect={onSelect} />
                    </View>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    moduleRow: {
        flexDirection: 'column',
        paddingVertical: 5,
        width: '100%',
    },
});



export default ModuleList;







