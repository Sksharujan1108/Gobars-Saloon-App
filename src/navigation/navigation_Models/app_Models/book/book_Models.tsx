import { StackScreenProps } from '@react-navigation/stack';

export type BookStackParamList = {
  BookScreen: undefined;
  DetailsAppointmentScreen: undefined
  BookingInvoiceScreen: undefined
};

export type BookStackScreenProps<Screen extends keyof BookStackParamList> = StackScreenProps<
BookStackParamList,
  Screen
>;