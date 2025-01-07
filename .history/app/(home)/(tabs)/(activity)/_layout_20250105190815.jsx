import React from 'react'

import { Pressable, StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

import { useThemeColor } from "@/hooks/useThemeColor";

const ActivityLayout = () => {
    const statusColor = useThemeColor([], "statusColor");
        const background = useThemeColor([], "background");
        const text = useThemeColor([], "text");
  return (
    <Stack
      screenOptions={{
        statusBarBackgroundColor: background,
        statusBarStyle: statusColor,
      }}
    >
      <Stack.Screen
        name="activity"
        options={{
          title: "Activity",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Inter_800ExtraBold", color: text },
          headerStyle: {backgroundColor: background},
           headerRight: (() => (
            <Press
                      <ThemedText>Read All</ThemedText>
                    ))
                    

        }}
      />
    </Stack>
  );
}

export default ActivityLayout

const styles = StyleSheet.create({})