import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useThemeColor } from "@/hooks/useThemeColor";
const ContactAgentLayout = () => {
  const statusColor = useThemeColor([], "statusColor");
  const background = useThemeColor([], "background");
  const text = useThemeColor([], "text");

  return (
    <Stack
      screenOptions={{
        statusBarBackgroundColor: background,
        statusBarStyle: statusColor,
        statusBarTranslucent: true,
        statusBarBackgroundColor: "transparent",
      }}
    >
      <Stack.Screen
        name="contactAgent"
        options={{ headerTitleAlign: "center", headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Inter_800ExtraBold", color: text },
          headerStyle: { backgroundColor: background },
          headerTintColor: text, }}
      />
    </Stack>
  );
}

export default ContactAgentLayout

const styles = StyleSheet.create({})