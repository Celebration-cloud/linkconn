import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const BoardingLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="(boarding)">
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(auth)" />
      {/* <Stack.Screen name="(home)"/> */}
    </Stack>
  );
}

export default BoardingLayout

const styles = StyleSheet.create({})