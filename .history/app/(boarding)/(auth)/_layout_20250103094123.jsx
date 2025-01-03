import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const AuthLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false, statusBarBackgroundColor: "white", statusBarStyle: "dark"}}>
        <Stack.Screen name='index'/>
        <Stack.Screen name='signUp'/>
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})