import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '@/navigation/stack/authStack/authStack';
import AppBottomTop from './tabs/mobile_bottom_tab';
import FindLocation from '@/component/home/FindLocation';
import Grading from '@/screen/auth/welcome';


const Routes = () => {
  return (
    <NavigationContainer>
      <AppBottomTop/>
    </NavigationContainer>
  )
}

export default Routes;