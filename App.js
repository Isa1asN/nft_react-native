import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Details from "./screens/Details";

const Stack = createStackNavigator()
const theme = {
  ...DefaultTheme,
  colors : {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}

export default function App() {
  // const [loaded] = useFonts({})

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName="home" >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

