import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack screenOptions={{st}}>
        <Stack.Screen name='index' />
    </Stack>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})