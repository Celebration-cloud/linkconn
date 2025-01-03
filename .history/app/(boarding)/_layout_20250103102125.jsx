import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

import { useThemeColor } from "@/hooks/useThemeColor";

const BoardingLayout = () => {
  const statusColor = useThemeColor([], "statusColor")
  const background = useThemeColor([], "background")
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: background,
        statusBarStyle: "d",
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