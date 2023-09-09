import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from '../../app/screens/welcomeScreen'
import LoginScreen from '../../app/screens/LoginScreen';
import RegisterScreen from '../../app/screens/RegisterScreen';
import TabsNavigator from '../../app/containers/TabNavigator';
const StackNavigator = () => {
    const Stack = createStackNavigator();

    return ( 
        <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='welcome' component={WelcomeScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='Home' component={TabsNavigator}/>
      </Stack.Navigator>
     );
}
 
export default StackNavigator;