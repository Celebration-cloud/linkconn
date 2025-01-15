import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import SearchingHeader from '../../../components/SearchingHeader'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "../../../components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import LocationComponent from '../../../components/LocationComponent';
import { Inter_300Light } from '@expo-google-fonts/inter';
const SearchingScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        name="searching"
        options={{ header: () => <SearchingHeader /> }}
      />
      <ThemedText >Recent Search</ThemedText>
      <LocationComponent />
    </ThemedView>
  );
}

export default SearchingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    }
})