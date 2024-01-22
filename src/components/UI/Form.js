import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ScrollView} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button, ButtonTray } from './Button';
import Icons from './Icons.js';



const Form = ({children, onSubmit, onCancel, submitLabel, submitIcon}) => {
    // Initialisation -----------------------------------------
    // State --------------------------------------------------
    // Handlers -----------------------------------------------
    // View ---------------------------------------------------
    return (
        <KeyboardAvoidingView style ={styles.formContainer}>

            <ScrollView contentContainerStyle={styles.formItems}>
                {children}
            </ScrollView>


            
        <ButtonTray>
            <Button label={submitLabel} icon={submitIcon} onClick={onSubmit} />
            <Button label="Cancel" icon={<Icons.Close />} onClick={onCancel} />
        </ButtonTray>

        </KeyboardAvoidingView>
    );
};

const InputText = ({ label, value, onChange }) => {
    // Initialisation -----------------------------------------
    // State --------------------------------------------------
    // Handlers -----------------------------------------------
    // View ---------------------------------------------------
    return (
    <View style={styles.item}>
    <Text style={styles.itemLabel}>{label}</Text>
    <TextInput 
    value ={value} 
    onChangeText={onChange} 
    style={styles.itemTextInput} />        
    </View>
    );
};

const InputSelect = ({ label, prompt, options, value, onChange }) => {
    // Initialisation -----------------------------------------
    // State --------------------------------------------------
    // Handlers -----------------------------------------------
    // View ---------------------------------------------------
    return (
        <View style={styles.item}>
            <Text style={styles.itemLabel}>{label}</Text>
            <Picker
                mode='dropdown'
                selectedValue={value}
                onValueChange={onChange}
                style={styles.itemPickerStyling}
            >
                <Picker.Item 
                    value={null} 
                    label={prompt} 
                    style={styles.itemPickerPromptStyling} />
                {options.map((option, index) => (
                        <Picker.Item 
                            key={index} 
                            value={option.value} 
                            label={option.label}
                        />
                ))}
            </Picker>    
        </View>
    );
};

    // Compose Components 
    Form.InputText = InputText;
    Form.InputSelect = InputSelect;


    // Styles

    const styles = StyleSheet.create({   
        formContainer: {
            gap: 10,
        },
        formItems: {
            gap: 5,
        },
        itemLabel: {
        color: 'grey',
        fontSize: 16, 
        marginBottom: 5,
        },
        itemTextInput: {
        height: 50,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'lightgray',
        },
        itemPickerStyling: {
        // height: 50,
        backgroundColor: 'whitesmoke',
        },
        itemPickerPromptStyling: {
        color: 'red',
        },
    
    });

    export default Form;


    






