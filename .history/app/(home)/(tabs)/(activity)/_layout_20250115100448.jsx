import React from 'react'

import { Pressable, StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "@/components/ThemedText";
import { Button } from '@rneui/base';
import { Ionicons } from '@expo/vector-icons';
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
          headerRight: () => (<Button buttonStyle={{
                backgroundColor: 'rgb(73, 73, 255)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}>
            <Ionicons name="call" size={20}/> 
            </Button>),
        }}
      />
    </Stack>
  );
}

export default ActivityLayout

const styles = StyleSheet.create({})