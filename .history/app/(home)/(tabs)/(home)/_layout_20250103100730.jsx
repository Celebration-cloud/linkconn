import React from 'react'

import { StyleSheet, Text, useColorScheme, View } from 'react-native'

import { Stack } from 'expo-router'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const HomeLayout = () => {
    const colorMode = useColorScheme()
    const iconColor = useThemeColor([], "icon")
    const tintColor = useThemeColor([], "tint")
  return (
    <Stack screenOptions={{statusBarStyle: colorMode}}>
        <Stack.Screen name='index' />
    </Stack>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})