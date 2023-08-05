import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS

//LOADER
import LoaderScreen from "./screens/LoaderScreen";
// WELCOME
import WelcomeScreen from "./screens/Welcome/WelcomeScreen";
//LOGIN
import Login from "./screens/Login/Login";
import PasswordResetScreen from "./screens/Login/PasswordResetScreen";
//REGISTER
import NameScreen from "./screens/Register/1/NameScreen";
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
import ValidationLoader from "./screens/Register/12/ValidationLoader";
//NAVBAR
import NavBar from "./components/NavBar";
//REDUX
import { Provider } from "react-redux";
import store from "./redux/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loader" screenOptions={{ headerShown: false, gestureEnabled: false }}>
          {/* LOADER */}
          <Stack.Screen
            name="Loader"
            component={LoaderScreen}
          />
          {/* WELCOME */}
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
          />
          {/* LOGIN */}

          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="PasswordReset"
            component={PasswordResetScreen}
          />
          {/* REGISTER */}
          <Stack.Screen
            name="Name"
            component={NameScreen}
          />
          <Stack.Screen
            name="Sexe"
            component={SexeScreen}
          />
          <Stack.Screen
            name="Age"
            component={AgeScreen}
          />
          <Stack.Screen
            name="Size"
            component={SizeScreen}
          />
          <Stack.Screen
            name="Weight"
            component={WeightScreen}
          />
          <Stack.Screen
            name="LevelPlayer"
            component={LevelPlayerScreen}
          />
          <Stack.Screen
            name="Ranking"
            component={RankingScreen}
          />
          <Stack.Screen
            name="RankingGoal"
            component={RankingGoalScreen}
          />
          <Stack.Screen
            name="Goals"
            component={GoalsScreen}
          />
          <Stack.Screen
            name="EmailPassword"
            component={EmailPasswordScreen}
          />
          <Stack.Screen
            name="ValidationRegister"
            component={ValidationRegisterScreen}
          />
          <Stack.Screen
            name="ValidationLoader"
            component={ValidationLoader}
          />
          {/* HOMEPAGE */}
          <Stack.Screen
            name="NavBar"
            component={NavBar}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


// https://oblador.github.io/react-native-vector-icons/