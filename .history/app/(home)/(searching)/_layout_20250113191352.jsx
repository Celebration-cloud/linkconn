import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import SearchingHeader from '../../../components/SearchingHeader'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const SearchingLayout = () => {
      const statusColor = useThemeColor([], "statusColor");
              const background = useThemeColor([], "background");
              const text = useThemeColor([], "text");
  return (
    <Stack >
        <Stack.Screen name='searching' options={{header:() => <SearchingHeader/>}}/>
    </Stack>
  )
}

export default SearchingLayout

const styles = StyleSheet.create({})