import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigation} from '@react-navigation/native-stack';
import beranda from './screens/beranda';
import About from './screens/About';
import Dompet from './screens/Dompet';

const Stack = createNativeStackNavigation();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name ="beranda"
        component={beranda}
        options={{headerShown: false}}
        />
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Dompet" component={Dompet}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;