import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false, statusBarBackgroundColor: "white", statusBarStyle: "dark"}}>
        {/* <Stack.Screen name='login'/>
        <Stack.Screen name='signUp'/> */}
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})