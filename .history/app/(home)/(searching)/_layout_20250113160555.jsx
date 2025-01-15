import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SearchingLayout = () => {
  return (
    <Stack>
        <Stack.Screen options={{header: <S}}/>
    </Stack>
  )
}

export default SearchingLayout

const styles = StyleSheet.create({})