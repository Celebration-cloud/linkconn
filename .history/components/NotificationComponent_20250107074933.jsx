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
        <ThemedView style={styles.content}>
          <ThemedView style={styles.cardAndMessage}>
            <Card.Image
              source={{
                uri: "https://app.visily.ai/projects/041fdbed-cec5-4c20-949e-586469fae813/boards/1530164/elements/669783214",
              }}
              style={styles.image}
            />
            <ThemedView style={styles.message}>
              <ThemedText type="subtitle">Recommended for you</ThemedText>
              <ThemedText type="default">1 hours</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.oval}><ThemedText>{"  "}</ThemedText></ThemedView>
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
    width: "12px",
    height: "12px",
    backgroundColor: "#006AFFFF",
    borderRadius: "50%",
  },
  card: {
    borderRadius: 10,
    margin: 0,
    padding: 0,
  },
  content: {
    flexDirection: "row",
    padding: 10,
    ga
  },
  cardAndMessage: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
  },
});