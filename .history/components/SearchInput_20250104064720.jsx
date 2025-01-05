import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const SearchInput = (props) => {
  return (
    <ThemedView style={{...styles.inputContainer, width: props.width}}>
      <Searchbar
        placeholder="Search"
        style={{
          backgroundColor: tintColor,
          borderRadius: 10,
          width: "100%",
        }}
      />
    </ThemedView>
  );
}

export default SearchInput

const styles = StyleSheet.create({
  inputContainer: {
    height: "100%",
  },
});