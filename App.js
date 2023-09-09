import {NavigationContainer} from '@react-navigation/native'
import { useFonts } from 'expo-font';
import { I18nManager } from 'react-native'
import StackNavigator from './app/containers/StackNavigator';


// suppurt for RTL
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);




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
            <StackNavigator />
          </NavigationContainer>
      );
  }
}
 
export default App;