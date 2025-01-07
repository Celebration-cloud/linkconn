import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const NotificationComponent = () => {
  return (
    <Fagm style={{...styles.container, backgroundColor: "green"}}>
      <ThemedText>NotificationComponent</ThemedText>
    </Fagm>
  )
}

export default NotificationComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})