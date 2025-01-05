import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import SearchHeader from '../../../../components/SearchHeader';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const SearchScreen = () => {
  return (
    <ThemedView>
      <Stack.Screen options={{ header: () => <SearchHeader/> }} />
      <TheText>SearchScreen</Text>
    </ThemedView>
  );
}

export default SearchScreen

const styles = StyleSheet.create({})