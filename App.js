import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoaderScreen from "./screens/LoaderScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import NameScreen from "./screens/Register/1/NameScreen";
import Login from "./screens/Login/Login";
import SexeScreen from "./screens/Register/2/SexeScreen";
import AgeScreen from "./screens/Register/3/AgeScreen";
import SizeScreen from "./screens/Register/4/SizeScreen";
import WeightScreen from "./screens/Register/5/WeightScreen";
import LevelPlayerScreen from "./screens/Register/6/LevelPlayerScreen";
import RankingScreen from "./screens/Register/7/RankingScreen";
import RankingGoalScreen from "./screens/Register/8/RankingGoalScreen";
import GoalsScreen from "./screens/Register/9/GoalsScreen";
import EmailPasswordScreen from "./screens/Register/10/EmailPasswordScreen";
import ValidationRegisterScreen from "./screens/Register/11/ValidationRegisterScreen";

import { Provider } from "react-redux";
import store from "./redux/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
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
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Name"
            component={NameScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Sexe"
            component={SexeScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Age"
            component={AgeScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Size"
            component={SizeScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Weight"
            component={WeightScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="LevelPlayer"
            component={LevelPlayerScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Ranking"
            component={RankingScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="RankingGoal"
            component={RankingGoalScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Goals"
            component={GoalsScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="EmailPassword"
            component={EmailPasswordScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="ValidationRegister"
            component={ValidationRegisterScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
     </Provider>
  );
}
