import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import SearchingHeader from '../../../components/SearchingHeader'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const SearchingScreen = () => {
  return (
    <ThemdView style={styles.container}>
        <Stack.Screen
                name="searching"
                options={{ header: () => <SearchingHeader /> }}
              />
      <Text>SearchingScreen</Text>
    </ThemdView>
  )
}

export default SearchingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})