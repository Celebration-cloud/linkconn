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
    <Stack >
        <Stack.Screen name="filter" options={{title: "Filter", headerTitleAlign: "center"}}/>
    </Stack>
  )
}

export default FilterLayout

const styles = StyleSheet.create({})