import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false, statusBarTranslucent: true, s}}>
        <Stack.Screen name='index' />
    </Stack>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})