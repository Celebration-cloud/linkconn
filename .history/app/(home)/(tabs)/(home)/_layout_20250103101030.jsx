import React from 'react'

import { StyleSheet, Text, useColorScheme, View } from 'react-native'

import { Stack } from 'expo-router'
import { useThemeColor } from "@/hooks/useThemeColor";
const HomeLayout = () => {
    const colorMode = useColorScheme()
    const iconColor = useThemeColor([], "icon")
    const tintColor = useThemeColor([], "tint")
      const background = useThemeColor([], "background")
  return (
    <Stack screenOptions={{statusBarBackgroundColor: background, statusBarStyle:}}>
        <Stack.Screen name='index' />
    </Stack>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})