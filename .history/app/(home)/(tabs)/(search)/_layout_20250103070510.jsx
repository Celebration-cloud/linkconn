import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SearchLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='searc'/>
    </Stack>
  )
}

export default SearchLayout

const styles = StyleSheet.create({})