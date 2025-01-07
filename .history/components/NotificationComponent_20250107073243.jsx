import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Card } from '@rneui/base';
const NotificationComponent = () => {
  return (
    <ThemedView style={{ ...styles.container, backgroundColor: "green" }}>
      <Card containerStyle={styles.card}>
        <ThemedView>
          <ThemedView>
            <Card.Image />
            <ThemedView>
              <ThemedText type="">Recommended for you</ThemedText>
              <ThemedText type="subtitle">1 hours</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </Card>
    </ThemedView>
  );
}

export default NotificationComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})