import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { SearchBar } from '@rneui/base';
const SearchInput = (props) => {
    const tintColor = useThemeColor([], "tint");
  return (
    <ThemedView style={{height: props.height, width: props.width}}>
      <SearchBar
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
});