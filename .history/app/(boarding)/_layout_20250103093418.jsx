import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const BoardingLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: "white",
        statusBarStyle: "dark",
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