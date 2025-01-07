import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Searchbar } from "react-native-paper";

const SearchInput = (props) => {
    const textColor = useThemeColor([], "tint");
    const backgroundColor = useThemeColor([], "background");
  return (
    <ThemedView style={{height: props.height, width: props.width}}>
      <Searchbar
        placeholder="Search"
        style={{
          backgroundColor: tintColor,
          borderRadius: 10,
          color: backgroundColor,
          width: "100%",
          height: 40,
          textAlign: "center"
        }}
        inputStyle={{
          paddingBottom: 26
        }}
      />
    </ThemedView>
  );
}

export default SearchInput

const styles = StyleSheet.create({
});