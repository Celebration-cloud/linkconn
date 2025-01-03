import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'
import { useThemeColor } from "@/hooks/useThemeColor";
const AuthLayout = () => {
  const statusColor = useThemeColor([], "statusColor")
  const background = useThemeColor([], "background")
  return (
    <Stack screenOptions={{headerShown: false, statusBarBackgroundColor: background, statusBarStyle: sta}}>
        <Stack.Screen name='index'/>
        <Stack.Screen name='signUp'/>
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})