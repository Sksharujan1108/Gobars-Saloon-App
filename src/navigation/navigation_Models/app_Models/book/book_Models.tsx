import { StackScreenProps } from '@react-navigation/stack';

export type BookStackParamList = {
  BookScreen: undefined;
};

export type BookStackScreenProps<Screen extends keyof BookStackParamList> = StackScreenProps<
BookStackParamList,
  Screen
>;