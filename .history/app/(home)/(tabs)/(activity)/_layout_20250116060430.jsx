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
      <Stack.Screen
        name="contactAgent"
        options={{
          headerTitleAlign: "center",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Inter_800ExtraBold", color: text },
          headerStyle: { backgroundColor: background },
          headerTintColor: text,
          headerRight: () => (
            <Button
              buttonStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.45)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 30,
              }}
            >
              <Ionicons
                name="call-outline"
                color="rgb(0, 0, 255)"
                size={20}
              />
            </Button>
          ),
        }}
      />
    </Stack>
  );
}

export default ActivityLayout

const styles = StyleSheet.create({})