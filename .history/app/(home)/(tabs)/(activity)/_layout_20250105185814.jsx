import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ActivityLayout = () => {
  
  return (
    <Stack
      screenOptions={{
        statusBarBackgroundColor: background,
        statusBarStyle: statusColor,
      }}
    >
      <Stack.Screen name="activity" />
    </Stack>
  );
}

export default ActivityLayout

const styles = StyleSheet.create({})