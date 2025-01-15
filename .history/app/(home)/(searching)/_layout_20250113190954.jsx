import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import SearchingHeader from '../../../components/SearchingHeader'

const SearchingLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='' options={{header: <SearchingHeader/>}}/>
    </Stack>
  )
}

export default SearchingLayout

const styles = StyleSheet.create({})