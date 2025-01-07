import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const MessagesComponent = () => {
  return (
    <The style={{ ...styles.container, backgroundColor: "green" }}>
      <ThemedText>MessagesComponent</ThemedText>
    </The>
  );
}

export default MessagesComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})