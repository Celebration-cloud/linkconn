import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText"
import { useThemeColor } from "@/hooks/useThemeColor";
import { TouchableRipple } from 'react-native-paper';
import { Card } from '@rneui/base';
const MessagesComponent = () => {
  return (
    <ThemedView style={{ ...styles.container, backgroundColor: "green" }}>
      <TouchableRipple
        rippleColor="#FF000020"
        onPress={() => console.log("enter notification")}
      >
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

export default MessagesComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})