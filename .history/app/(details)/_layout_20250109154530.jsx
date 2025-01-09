import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const DetailsLayout = () => {
 
  return (
    <Stack
      screenOptions={{
        statusBarTranslucent: true,
        statusBarBackgroundColor: "transparent",
      }}
      initialRouteName="deti"
    >
      <Stack.Screen name="details" />
    </Stack>
  );
}

export default DetailsLayout

const styles = StyleSheet.create({})