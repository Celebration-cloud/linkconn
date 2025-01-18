import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "@rneui/base";

const ChatComponent = ({ messages }) => {
  return (
    <View style={styles.container}>
      {messages?.map((message, index) => (
        <View key={index} style={styles.messageContainer}>
          <Avatar rounded source={{ uri: message.avatar }} size="small" />
          <View style={message.isUser ? styles.blueBubble : styles.whiteBubble}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    padding: 10,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  blueBubble: {
    backgroundColor: "#d0e7ff",
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
    maxWidth: "80%",
  },
  whiteBubble: {
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
    maxWidth: "80%",
  },
  messageText: {
    fontSize: 16,
  },
});

export default ChatComponent;
