// AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
// types/index.d.ts
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
  // 다른 화면들도 필요에 따라 추가
};

export type Screen1NavigationProp = StackNavigationProp<RootStackParamList, 'Screen1'>;
export type Screen1RouteProp = RouteProp<RootStackParamList, 'Screen1'>;

export type Screen2NavigationProp = StackNavigationProp<RootStackParamList, 'Screen2'>;
export type Screen2RouteProp = RouteProp<RootStackParamList, 'Screen2'>;

const Screens = {
  screen1: 'Screen1',
  screen2: 'Screen2',
};
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName="Screen1"
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
