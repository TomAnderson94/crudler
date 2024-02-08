import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

// Initialisation ----------------------------------

const Icons = {};

const Add = () => <MaterialIcons name='add' size={16} color={'#FFFFFF'}/>;
const Edit = () => <MaterialIcons name='edit' size={16}/>;
const Delete = () => <MaterialIcons name='delete' size={16}/>;
const Close = () => <MaterialIcons name ='close' size={16} color={'#FFFFFF'}/>;
const Sort = () => <MaterialIcons name ='sort' size={16} color={'#FFFFFF'} />;
const CautionVibration = () => <FontAwesome5 name="biohazard" size={16} color="black" />;

// Compose -----------------------------------------
Icons.Add = Add;
Icons.Edit = Edit;
Icons.Delete = Delete;
Icons.Close = Close;
Icons.Sort = Sort;
Icons.CautionVibration = CautionVibration;

export default Icons;
