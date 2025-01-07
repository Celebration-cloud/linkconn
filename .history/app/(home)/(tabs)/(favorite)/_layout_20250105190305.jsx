import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

import { useThemeColor } from "@/hooks/useThemeColor";

const FavoriteLayout = () => {
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
        name="favorite"
        options={{
          title: "Favorite",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Inter_800ExtraBold", color: text },
          headerStyle: { backgroundColor: background },
          headerRight
        }}
      />
    </Stack>
  );
}

export default FavoriteLayout

const styles = StyleSheet.create({})