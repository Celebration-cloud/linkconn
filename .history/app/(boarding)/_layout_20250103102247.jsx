import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

import { useThemeColor } from "@/hooks/useThemeColor";

const BoardingLayout = () => {
  const statusColor = useThemeColor([], "statusColor")
  const background = useThemeColor([], "background")
  console.log(statysColor)
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: background,
        statusBarStyle: statusColor,
      }}
      initialRouteName="index"
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      {/* <Stack.Screen name="(home)"/> */}
    </Stack>
  );
}

export default BoardingLayout

const styles = StyleSheet.create({})