import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import SearchHeader from '../../../../components/SearchHeader';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import MapView from 'react-native-maps';
const SearchScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ header: () => <SearchHeader/> }} />
      <ThemedText>SearchScreen</ThemedText>
      <MapView style={styles.mapView} rotateEnabled={true} r/>
    </ThemedView>
  );
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    width: '100%',
    height: '100%',
  }
})