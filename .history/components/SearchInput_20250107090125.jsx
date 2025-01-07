import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Searchbar } from "react-native-paper";

const SearchInput = (props) => {
    const textColor = useThemeColor([], "text");
    const backgroundColor = useThemeColor([], "background");
  return (
    <ThemedView style={{height: props.height, width: props.width}}>
      <Searchbar
        placeholder="Search"
        style={{
          backgroundColor: textColor,
          borderRadius: 10,
          color: "green",
          width: "100%",
          height: 40,
          textAlign: "center"
        }}
        inputStyle={{
          paddingBottom: 26,
          color: back
        }}
      />
    </ThemedView>
  );
}

export default SearchInput

const styles = StyleSheet.create({
});