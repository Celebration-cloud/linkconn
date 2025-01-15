import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const FilterLayout = () => {
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
        name="filter"
        options={{
          title: "Filter",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Inter_800ExtraBold", color: text },
          headerStyle: { backgroundColor: background },
          headerLeft: () => (<ThemedText>Cancel</ThemedText>)
        }}
      />
    </Stack>
  );
}

export default FilterLayout

const styles = StyleSheet.create({})