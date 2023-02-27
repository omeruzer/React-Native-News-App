import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './src/routes/index.js';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
        }}>
        {routes.map((e) => <Stack.Screen key={e.name} name={e.name} component={e.page} />)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

