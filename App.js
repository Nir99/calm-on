import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/components/splash.js';
import LoginSignup from './src/components/session/loginSignup.js';
import Homescreen from './src/components/homescreen.js';
import IntroVideo from './src/components/video.js';
import Sprite from './src/components/tempSpriteChatbox.js';
import Storytime from './src/components/storytime.js';
import MilkMilkMilk from './src/components/milkMilkMilk';
/* eslint-disable react/jsx-filename-extension */
import { Provider } from "react-redux";
import configureStore from "./src/store/store";

const Stack = createStackNavigator();
const store = configureStore();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown:false, animationEnabled:false}}>
          <Stack.Screen name='IntroVideo' component={IntroVideo} />
          <Stack.Screen name='Splash' component={Splash} />
          <Stack.Screen name='loginSignup' component={LoginSignup} />
          <Stack.Screen name='Homescreen' component={Homescreen} />
          <Stack.Screen name='Stories' component={Sprite} options={{headerShown: true}} />
          <Stack.Screen name='Storytime' component={Storytime} options={{headerShown: true}}/>
          <Stack.Screen name='milkMilkMilk' component={MilkMilkMilk} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
