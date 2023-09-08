import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { useFonts } from 'expo-font';
import { I18nManager } from 'react-native'
import WelcomeScreen from './app/screens/welcomeScreen'
import LoginScreen from './app/screens/LoginScreen';

// suppurt for RTL
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const Stack = createStackNavigator();


const App = () => {

  const [loaded] = useFonts({
    yekan : require('./app/assets/fonts/byekan.ttf'),
    ih : require('./app/assets/fonts/ih.ttf')
  })
  if (!loaded) {
    return null;
  } else {
          return ( 
          <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }} >
              <Stack.Screen name='welcome' component={WelcomeScreen}/>
              <Stack.Screen name='Login' component={LoginScreen}/>
            </Stack.Navigator>
          </NavigationContainer>
      );
  }
}
 
export default App;