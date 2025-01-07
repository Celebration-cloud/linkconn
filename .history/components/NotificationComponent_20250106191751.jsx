import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const NotificationComponent = () => {
  return (
    <F style={{...styles.container, backgroundColor: "green"}}>
      <ThemedText>NotificationComponent</ThemedText>
    </F>
  )
}

export default NotificationComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})