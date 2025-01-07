import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Card } from '@rneui/base';
import { TouchableRipple } from 'react-native-paper';
const NotificationComponent = () => {
  return (
    <ThemedView style={{ ...styles.container, backgroundColor: "green" }}>
      <TouchableRipple rippleColor="rb">
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
                <ThemedText type="defaultSemiBold">
                  Recommended for you
                </ThemedText>
                <ThemedText type="default">1 hours</ThemedText>
              </ThemedView>
            </ThemedView>
            <ThemedView style={styles.oval}>
              <ThemedText style={styles.space}></ThemedText>
            </ThemedView>
          </ThemedView>
        </Card>
      </TouchableRipple>
    </ThemedView>
  );
}

export default NotificationComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  oval: {
    width: "10px",
    height: "10px",
    alignSelf: "center",
    backgroundColor: "#006AFFFF",
    borderRadius: "50%",
  },
  space: {
    paddingHorizontal: 9
  },
  card: {
    margin: 0,
    padding: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
},
content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  cardAndMessage: {
    flexDirection: "row",
    alignItems: "center",   
    gap: 10
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
});