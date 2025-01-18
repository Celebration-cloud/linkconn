import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  View,
} from "react-native";
import { Stack } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MessagingInput from "../../../components/MessagingInput";
import ChatComponent from "../../../components/ChatComponent";

const ContactAgentScreen = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [inputHeight, setInputHeight] = useState(40);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'd love to help you with that. Do you have a specific location in mind?",
      avatar: "https://example.com/avatar1.png",
      isUser: false,
    },
    {
      text: "Yes, I’m interested in the downtown area. Ideally, I want a 3-bedroom house with a backyard.",
      avatar: "https://example.com/avatar2.png",
      isUser: true,
    },
  ]);

  const handleSendMessage = (text) => {
    const newMessage = {
      text,
      avatar: "https://example.com/avatar2.png", // Update with the user's avatar URL
      isUser: true,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <ThemedView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={keyboardVisible && 90}
        style={styles.keyboardAvoidingView}
      >
        <Stack.Screen options={{ title: "Jacob" }} />
        <ThemedView style={styles.chatContainer}>
          <ChatComponent messages={messages} />
        </ThemedView>
        <MessagingInput
          inputHeight={inputHeight}
          setInputHeight={setInputHeight}
          onSendMessage={handleSendMessage}
        />
      </KeyboardAvoidingView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE5DD",
    bottom: 0,
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "flex-end",
    bottom: 0,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
});

export default ContactAgentScreen;
