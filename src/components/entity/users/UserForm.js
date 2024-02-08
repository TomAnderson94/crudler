import { StyleSheet } from 'react-native';
import Icons from '../../UI/Icons.js';
import { useState } from 'react';
import Form from '../../UI/Form.js';

    // Default Data Model 
const defaultUser = {
    UserID: null,
    UserFirstname:null,
    UserLastname:null,
    UserEmail:null,
    UserImageURL:null,
    UserType: null,
    CourseName: null,
    UserYear: null,
};

const UserForm = ({ originalUser, onSubmit, onCancel }) => {
    // Initialisation ----------------------------------------
    defaultUser.UserID = Math.floor(100000 + Math.random() * 900000);
    defaultUser.UserImageURL = 'https://images.generated.photos/IitdqDaBBrr4auYZFuuC_dplp3OtwU2cCuN4q35rN8M/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/NDcyMTg5LmpwZw.jpg';

    const userTypes = [
        { value: 'Student', label: 'Student' },
        { value: 'Staff', label: 'Staff' },
        { value: 'Admin', label: 'Admin' },
    ]; 

    // State -------------------------------------------------
    const [user, setUser] = useState(originalUser || defaultUser);

    // Handlers  ---------------------------------------------
    const handleChange = (field, value) => setUser( {...user, [field]: value} );
    const handleSubmit = () => onSubmit(user);

    // View --------------------------------------------------
    const submitLabel = originalUser ? 'Modify' : 'Add';
    const submitIcon = originalUser ? <Icons.Edit /> : <Icons.Add />;

    return (
        <Form
            onSubmit={handleSubmit}
            onCancel={onCancel}
            submitLabel={submitLabel}
            submitIcon={submitIcon}
        >

        <Form.InputText 
            label="First Name"
            value ={user.UserFirstname}
            onChange={(value) => handleChange('UserFirstname', value)}
        />

        <Form.InputText 
            label="Last Name"
            value ={user.UserLastname}
            onChange={(value) => handleChange('UserLastname', value)}
        />

        <Form.InputSelect 
            label="User Type"
            prompt="Select User Type ..."
            options={userTypes}
            value={user.UserType}
            onChange={(value) => handleChange('UserType', value)}
            style={styles.inputSelect}
        /> 

        <Form.InputText 
            label="User Email"
            value ={user.UserEmail}
            onChange={(value) => handleChange('UserEmail', value)}
        />

        <Form.InputText 
            label="User Image URL"
            value ={user.UserImageURL}
            onChange={(value) => handleChange('UserImageURL', value)}
        />

        <Form.InputText 
            label="Course Name"
            value ={user.CourseName}
            onChange={(value) => handleChange('CourseName', value)}
        />

        <Form.InputText 
            label="Year Spent"
            value ={user.UserYear}
            onChange={(value) => handleChange('UserYear', value)}
        />

        </Form>
    );
};

const styles = StyleSheet.create({
    inputSelect: {
        width: '100%',
        height: 150,
        backgroundColor: '#f0f0f0',
    },
});

export default UserForm;
