import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const MessagesComponent = () => {
  return (
    <Fragment style={{ ...styles.container, backgroundColor: "green" }}>
      <ThemedText>MessagesComponent</ThemedText>
    </Fragment>
  );
}

export default MessagesComponent

const styles = StyleSheet.create({
    container: {
        
    }
})