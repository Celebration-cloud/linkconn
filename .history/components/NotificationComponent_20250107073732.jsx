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
              <ThemedText type="subtitle">Recommended for you</ThemedText>
              <ThemedText type="default">1 hours</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView s></ThemedView>
        </ThemedView>
      </Card>
    </ThemedView>
  );
}

export default NotificationComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  oval: {
    position: "absolute",
    top: "194px",
    left: "362px",
    width: "12px",
    height: "12px",
    background: "#006AFFFF",
    borderRadius: "50%",
  },
});