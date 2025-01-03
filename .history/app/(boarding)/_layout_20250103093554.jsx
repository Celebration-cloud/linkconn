import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useThemeColor } from "@/hooks/useThemeColor";
const BoardingLayout = () => {
  const tint = useThemeColor([], "tint")
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: tint,
        statusBarStyle: tint,
        st
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