import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoaderScreen from "./screens/LoaderScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import NameRequest from "./screens/Register/1/NameScreen";
import Login from "./components/Login/Login";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loader">
        <Stack.Screen
          name="Loader"
          component={LoaderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen} 
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="NameRequest"
          component={NameRequest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
