import { StackScreenProps } from '@react-navigation/stack';

export type AuthStackParamList = {
  SplashScreen: undefined;
  OnBoardingScreen: undefined;
  LogInScreen: undefined;
  ForgotPasswordScreen: undefined;
  SignUpEmailOTPScreen: {
    email: string;
  };
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = StackScreenProps<
  AuthStackParamList,
  Screen
>;
