import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const FilterLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="filter"/>
    </Stack>
  )
}

export default FilterLayout

const styles = StyleSheet.create({})