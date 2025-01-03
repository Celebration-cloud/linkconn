import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SearchLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='search'/>
    </Stack>
  )
}

export default SearchLayout

const styles = StyleSheet.create({})