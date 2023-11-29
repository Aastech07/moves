
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Component/SplashScreen';
import TabsNavigaton from './Component/TabsNavigation';
import Details from './Component/Details';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" options={{headerShown:false}} component={SplashScreen} />
        <Stack.Screen name="TabsNavigaton" options={{headerShown:false}} component={TabsNavigaton} />
        <Stack.Screen name="Details" options={{headerShown:false}} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;