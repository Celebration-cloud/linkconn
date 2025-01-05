import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView';
import { Ionicons } from '@expo/vector-icons';

const SearchAndFilter = () => {
  
  return (
    <ThemedView style={styles.searchBar}>
      <ThemedView style={styles.inputContainer}>
        <Searchbar
          placeholder="Search"
          style={{
            backgroundColor: tintColor,
            borderRadius: 10,
            width: "100%",
          }}
        />
      </ThemedView>
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
  inputContainer: {
    width: "85%",
    height: "100%",
  },
});