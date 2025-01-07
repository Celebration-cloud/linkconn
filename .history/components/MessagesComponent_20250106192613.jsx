import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText"
import { useThemeColor } from "@/hooks/useThemeColor";
const MessagesComponent = () => {
  return (
    <ThemedView  style={{ ...styles.container, backgroundColor: "green" }}>
      <ThemedText>MessagesComponent</ThemedText>
    </ThemedView>
  );
}

export default MessagesComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})