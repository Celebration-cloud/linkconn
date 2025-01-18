import React from 'react'

import { Pressable, StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

import { Button } from '@rneui/base';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from "@/components/ThemedText";
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
        statusBarTranslucent: true,
        statusBarBackgroundColor: "transparent",
      }}
    >
      <Stack.Screen
        name="activity"
        options={{
          title: "Activity",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Inter_800ExtraBold", color: text },
          headerStyle: { backgroundColor: background },
          headerRight: () => (
            <Pressable onPress={() => console.log("Read All")}>
              <ThemedText>Read All</ThemedText>
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}

export default ActivityLayout

const styles = StyleSheet.create({})