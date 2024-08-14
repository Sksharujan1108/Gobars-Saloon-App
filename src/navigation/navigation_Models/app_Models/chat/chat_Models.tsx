import { StackScreenProps } from '@react-navigation/stack';

export type ChatStackParamList = {
  ChatScreen: undefined;
};

export type ChatStackScreenProps<Screen extends keyof ChatStackParamList> = StackScreenProps<
ChatStackParamList,
  Screen
>;