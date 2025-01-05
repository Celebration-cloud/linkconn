import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import SearchHeader from '../../../../components/SearchHeader';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const SearchScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ header: () => <SearchHeader/> }} />
      <Text>SearchScreen</Text>
    </View>
  );
}

export default SearchScreen

const styles = StyleSheet.create({})