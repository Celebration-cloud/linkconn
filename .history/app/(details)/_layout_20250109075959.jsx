import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Button } from '@rneui/base'
import { Ionicons } from '@expo/vector-icons'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const DetailsLayout = () => {
  const textColor = useThemeColor([], "text")
  return (
    <Stack
      screenOptions={{
        statusBarTranslucent: true,
        statusBarBackgroundColor: "transparent",
      }}
    >
      <Stack.Screen name="details" />
    </Stack>
  );
}

export default DetailsLayout

const styles = StyleSheet.create({})