import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '@/navigation/stack/authStack/authStack';

const Routes = () => {
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  )
}

export default Routes;