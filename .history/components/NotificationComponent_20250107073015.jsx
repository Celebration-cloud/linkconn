import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Card } from '@rneui/base';
const NotificationComponent = () => {
  return (
    <ThemedView style={{...styles.container, backgroundColor: "green"}}>
      <Card containerStyle={styles.card}>
        <ThemedView>
            <ThemedView>
            <Card.Image />
            <ThemedView>
                <ThemedText
            </ThemedView>
            </ThemedView>
        </ThemedView>
      </Card>
    </ThemedView>
  )
}

export default NotificationComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})