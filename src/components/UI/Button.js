import { Pressable, StyleSheet, Text, View} from "react-native";

export const Button = ({label, icon, onClick, styleLabel, styleButton}) => {
    // Initialisation --------------------------------
    // State -----------------------------------------
    // Handlers --------------------------------------
    // View ------------------------------------------
    return (
        <Pressable onPress={onClick} style={[styles.button, styleButton]}>
            {
                icon ? icon : null
            }
            <Text style={[styles.label, styleLabel]}>{label}</Text>
        </Pressable>
    );
};

export const ButtonTray = ({children}) => {
    // Initialisation --------------------------------
    // State -----------------------------------------
    // Handlers --------------------------------------
    // View ------------------------------------------
    return (
        <View style={styles.buttonTray}>
            {children}
        </View>
    );
};


const styles = StyleSheet.create({
    buttonTray: {
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'space-around',
    },
    button: {
        minHeight: 50,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'grey',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        flexDirection: 'row',
        gap: 5,
        width: '40%',
        marginLeft: 5,
        marginRight: 5,
    },
    label: {
        fontSize: 16,
    },
});

