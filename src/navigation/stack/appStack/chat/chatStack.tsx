import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Book from '@/screen/app/book';
import { BookStackParamList } from '@/navigation/navigation_Models/app_Models/book/book_Models';
import Chat from '@/screen/app/chat';
import { ChatStackParamList } from '@/navigation/navigation_Models/app_Models/chat/chat_Models';

const Stack = createNativeStackNavigator<ChatStackParamList>();

const ChatStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'ChatScreen'
      screenOptions = {{ headerShown: false }}
    >
        <Stack.Screen name = "ChatScreen" component = {Chat} />
    </Stack.Navigator>
  )
}

export default ChatStack;