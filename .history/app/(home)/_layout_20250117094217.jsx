import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

const HomeLayout = () => {
    
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        statusBarBackgroundColor: "transparent",
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(details)" />
      <Stack.Screen name="(searching)" />
      <Stack.Screen name="(searchin)" />
    </Stack>
  );
}

export default HomeLayout

const styles = StyleSheet.create({})