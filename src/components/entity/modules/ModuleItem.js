import { Pressable, StyleSheet, Text, View } from 'react-native';

const ModuleItem = ({ module, onSelect }) => {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------


  // View ----------------------------------------
    return (
        <Pressable onPress={() => onSelect(module)} style={{width: '100%' }}>
            <View style={styles.item}>
                <Text style={styles.text}> 
                    {module.ModuleCode} {module.ModuleName}
                </Text>
                <Text style={styles.dimText}> (Click for details) </Text>
            </View>
        </Pressable>
    );
};
    const styles = StyleSheet.create({
        item: {
            paddingVertical: 10,
            borderBottomWidth: 2,
            borderColor: '#003366',
            width: '100%',
            alignItems: 'center',
        },
        text: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        dimText: {
            color: 'grey',
            fontSize: 10,
        },
    });

export default ModuleItem;
