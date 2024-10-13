import React from 'react';
import { Platform, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Routes from './src/navigation/routes';
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Routes />
        <FlashMessage
          position='top'
          floating
          statusBarHeight={Platform.OS == 'ios' ? hp(4) : hp(5)}
        />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
