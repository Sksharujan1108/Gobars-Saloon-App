import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewScreen = () => {
  return (
    <ImageBackground
      source = {require('@/assets/image/LogIn/Login_Image_Version.png')}
      style = {{
        width: '100%',
        height: '100%',
      }}
      resizeMode = {'cover'}
    >
        <View
          style = {{
            flex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >

        </View>
        
    </ImageBackground>
  )
}

export default NewScreen

const styles = StyleSheet.create({})