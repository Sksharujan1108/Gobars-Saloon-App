import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/features/routes';
import { Platform, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function App() {
  return (
    <>
      <Routes/>
      <FlashMessage
        position='top'
        floating
        statusBarHeight={Platform.OS == 'ios' ? hp(7) : hp(7)}
      />
    </>
  );
}
