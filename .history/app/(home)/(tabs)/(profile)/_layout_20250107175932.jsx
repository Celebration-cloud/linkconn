import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ProfileLayout = () => {
      const statusColor = useThemeColor([], "statusColor")
        const background = useThemeColor([], "background")
  return (
    <Stack
      screenOptions={{
        statusBarBackgroundColor: background,
        statusBarStyle: statusColor,
      }}
    >
      <Stack.Screen name="profile" />
    </Stack>
  );
}

export default ProfileLayout

const styles = StyleSheet.create({})