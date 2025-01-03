import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'
import { useThemeColor } from "@/hooks/useThemeColor";
const AuthLayout = () => {
  const tint = useThemeColor([], "tint")
  const background = useThemeColor([], "background")
  return (
    <Stack screenOptions={{headerShown: false, statusBarBackgroundColor: ba, statusBarStyle: "dark"}}>
        <Stack.Screen name='index'/>
        <Stack.Screen name='signUp'/>
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})