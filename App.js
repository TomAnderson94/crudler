import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";
import ModuleModifyScreen from "./src/components/screens/ModuleModifyScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";
import UserAddScreen from "./src/components/screens/UserAddScreen";
import UserListScreen from "./src/components/screens/UserListScreen";
import UserModifyScreen from "./src/components/screens/UserModifyScreen";
import UserViewScreen from "./src/components/screens/UserViewScreen";


  // Initialisation ------------------------------

const ModuleStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

  // State ---------------------------------------

  // Handlers ------------------------------------

  // Stack Navigator for Modules
  function ModuleStackScreen() {
    return (
      <ModuleStack.Navigator 
        initalRouteName ="ModuleListScreen"
        screenOptions={{
          headerStyle: { backgroundColor: 'black'},
          headerTintColor: 'white',
      }}
      > 
        <ModuleStack.Screen
          name ="ModuleListScreen"
          component={ModuleListScreen}
          options={{ title: "Module Crudler" }} 
        />

        <ModuleStack.Screen
          name ="ModuleAddScreen"
          component={ModuleAddScreen}
          options={{ title: "Add Module" }} 
        />

        <ModuleStack.Screen
          name ="ModuleViewScreen"
          component={ModuleViewScreen}
          options={{ title: "View Modules" }} 
        />

        <ModuleStack.Screen
          name ="ModuleModifyScreen"
          component={ModuleModifyScreen}
          options={{ title: "Modify Module" }} 
        />
        
      </ModuleStack.Navigator>
    );
  }

  // Stack Navigator for Users
  function UserStackScreen() {
    return (
      <UserStack.Navigator
        initialRouteName="UserListScreen"
        screenOptions={{
          headerStyle: { backgroundColor: 'black'},
          headerTintColor: 'white',
      }}
      >
        <UserStack.Screen
          name="UserListScreen"
          component={UserListScreen}
          options={{ title: "User Crudler" }} 
        />
        <UserStack.Screen
          name="UserAddScreen"
          component={UserAddScreen}
          options={{ title: "Add User" }} 
        />
        <UserStack.Screen
          name="UserViewScreen"
          component={UserViewScreen}
          options={{ title: "View User" }} 
        />
        <UserStack.Screen
          name="UserModifyScreen"
          component={UserModifyScreen}
          options={{ title: "Modify User" }} 
        />

      </UserStack.Navigator>
    );
  }


// View ----------------------------------------

// Main App Component with Drawer Navigator
export const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Modules">
        <Drawer.Screen name="Modules" component={ModuleStackScreen} />
        <Drawer.Screen name="Users" component={UserStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
