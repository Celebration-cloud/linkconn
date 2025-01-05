import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import SearchInput from "./SearchInput"
const SearchAndFilter = () => {
   const iconColor = useThemeColor([], "icon");
   const tintColor = useThemeColor([], "tint");
   const background = useThemeColor([], "background");
   const textColor = useThemeColor([], "text");
  return (
    <ThemedView style={styles.searchBar}>
      <SearchInput width="85%" height="30"/>
      <Ionicons name="options-outline" color={iconColor} size={30} />
    </ThemedView>
  );
}

export default SearchAndFilter

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    alignItems: "center",
  },
});