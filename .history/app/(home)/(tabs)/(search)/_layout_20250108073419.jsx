import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useThemeColor } from "@/hooks/useThemeColor";
const SearchLayout = () => {
    const statusColor = useThemeColor([], "statusColor");
    const background = useThemeColor([], "background");
  return (
    <Stack
      screenOptions={{
        statusBarBackgroundColor: background,
        statusBarStyle: statusColor,
        
      }}
    >
      <Stack.Screen name="search" />
    </Stack>
  );
}

export default SearchLayout

const styles = StyleSheet.create({})