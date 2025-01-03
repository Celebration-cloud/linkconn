import React from 'react'

import { StyleSheet, Text, useColorScheme, View } from 'react-native'

import { Stack } from 'expo-router'

const HomeLayout = () => {
    const colorMode = useColorScheme()
  return (
    <Stack screenOptions={{statusBarStyle: col}}>
        <Stack.Screen name='index' />
    </Stack>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})