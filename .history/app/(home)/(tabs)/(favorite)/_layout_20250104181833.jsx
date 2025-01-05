import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

import { Inter_800ExtraBold } from '@expo-google-fonts/inter'

const FavoriteLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='favorite' options={{title: ""headerTitleAlign: "center", headerTitleStyle: {fontFamily: "Inter_800ExtraBold"}}}/>
    </Stack>
  )
}

export default FavoriteLayout

const styles = StyleSheet.create({})