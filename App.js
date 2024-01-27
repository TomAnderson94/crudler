import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";
import ModuleModifyScreen from "./src/components/screens/ModuleModifyScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";
import UserAddScreen from "./src/components/screens/UserAddScreen";
import UserListScreen from "./src/components/screens/UserListScreen";
import UserModifyScreen from "./src/components/screens/UserModifyScreen";
import UserViewScreen from "./src/components/screens/UserViewScreen";


const Stack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();


export const App = () => {
  // Initialisation ------------------------------

  // State ------------------------------

  // Handlers ------------------------------

  // View ------------------------------
  return (
    <NavigationContainer>

{/*
      <Stack.Navigator 
      initalRouteName ="ModuleListScreen"
      screenOptions={{
        headerStyle: { backgroundColor: 'black'},
        headerTintColor: 'white',
      }}
      > 
        <Stack.Screen
          name ="ModuleListScreen"
          component={ModuleListScreen}
          options={{ title: "Module Crudler" }} 
        />

        <Stack.Screen
          name ="ModuleAddScreen"
          component={ModuleAddScreen}
          options={{ title: "Add Module" }} 
        />

        <Stack.Screen
          name ="ModuleViewScreen"
          component={ModuleViewScreen}
          options={{ title: "View Modules" }} 
        />

        <Stack.Screen
          name ="ModuleModifyScreen"
          component={ModuleModifyScreen}
          options={{ title: "Modify Module" }} 
        />
        

      </Stack.Navigator>
      */}

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




    </NavigationContainer>
  );
};

export default App;
