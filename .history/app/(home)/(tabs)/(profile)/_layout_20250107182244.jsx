import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const ProfileLayout = () => {
      const statusColor = useThemeColor([], "statusColor")
        const background = useThemeColor([], "background")
  return (
    <Stack
      screenOptions={{
        statusBarBackgroundColor: "transparent",
        statusBarStyle: statusColor,
      }}
    >
      <Stack.Screen name="profile" options={{headerShown: false}}/>
    </Stack>
  );
}

export default ProfileLayout

const styles = StyleSheet.create({})