import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const FavoriteLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='Favorite' options={{headerTitleAlign: "center", headerTitleStyle: {fontFamily}}}/>
    </Stack>
  )
}

export default FavoriteLayout

const styles = StyleSheet.create({})