import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText"
import { useThemeColor } from "@/hooks/useThemeColor";
import { TouchableRipple } from 'react-native-paper';
import { Card } from '@rneui/base';
import { router } from 'expo-router';
const MessagesComponent = () => {
  const handleContact = () => { 
    router.navigate("contactAgent")

    console.log("enter message" + route)
   };
  return (
    <ThemedView style={{ ...styles.container, backgroundColor: "green" }}>
      <TouchableRipple
        rippleColor="#FF000020"
        onPress={handleContact}
      >
        <Card containerStyle={styles.card}>
          <ThemedView style={styles.content}>
            <Card.Image
              source={{
                uri: "https://app.visily.ai/projects/041fdbed-cec5-4c20-949e-586469fae813/boards/1530164/elements/669783214",
              }}
              style={styles.image}
            />
            <ThemedView style={styles.cardAndMessage}>
              <ThemedView style={styles.message}>
                <ThemedText style={styles.title} type="defaultSemiBold">
                  Anthony Moore
                </ThemedText>
                <ThemedText style={styles.time} type="default">
                  Saturday, November 21
                </ThemedText>
              </ThemedView>

              <ThemedView style={styles.status}>
                <ThemedText style={styles.msg} type="default">
                  Hi there! I’d love to help you with that. Do...
                </ThemedText>
                <ThemedView style={styles.oval}>
                  <ThemedText style={styles.space}></ThemedText>
                </ThemedView>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </Card>
      </TouchableRipple>
      <TouchableRipple
        rippleColor="#FF000020"
        onPress={() => console.log("enter message")}
      >
        <Card containerStyle={styles.card}>
          <ThemedView style={styles.content}>
            <Card.Image
              source={{
                uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
              }}
              style={styles.image}
            />
            <ThemedView style={styles.cardAndMessage}>
              <ThemedView style={styles.message}>
                <ThemedText style={styles.title} type="defaultSemiBold">
                  Anthony Moore
                </ThemedText>
                <ThemedText style={styles.time} type="default">
                  Saturday, November 21
                </ThemedText>
              </ThemedView>

              <ThemedView style={styles.status}>
                <ThemedText style={styles.msg} type="default">
                  Hi there! I’d love to help you with that. Do...
                </ThemedText>
                <ThemedView style={styles.oval}>
                  <ThemedText style={styles.space}></ThemedText>
                </ThemedView>
              </ThemedView>
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
    width: Dimensions.get("window").width / 1.08,
  },
  oval: {
    width: "5px",
    height: 15,
    alignSelf: "center",
    backgroundColor: "#006AFFFF",
    borderRadius: "50%",
  },
  space: {
    paddingHorizontal: 5,
  },
  card: {
    margin: 0,
    padding: 0,
    borderWidth: 0,
    borderBottomWidth: 0.3,
  },
  content: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingVertical: 20,
  },
  cardAndMessage: {
    width: Dimensions.get("window").width / 1.34,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  status: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: Dimensions.get("window").fontScale * 12,
  },
  time: {
    fontSize: Dimensions.get("window").fontScale * 10,
  },
  msg: {
    fontSize: Dimensions.get("window").fontScale * 10,
  },
  message: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});