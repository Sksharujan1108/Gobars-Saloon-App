import { StackScreenProps } from '@react-navigation/stack';

export type AuthStackParamList = {
  SplashScreen: undefined;
  WelcomeScreen: undefined;
  OnBoardingScreen: undefined;
  LogInScreen: undefined;
  RegisterScreen: undefined;
  ForgotPasswordScreen: undefined;
  AuthenticationScreen: {
    email: string;
  };
  AppBottomTopScreen: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = StackScreenProps<
  AuthStackParamList,
  Screen
>;
