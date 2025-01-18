import React, { useEffect, useState } from "react";
import { StyleSheet, KeyboardAvoidingView, Platform, Dimensions, Keyboard } from "react-native";
import { Stack } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MessagingInput from "../../../components/MessagingInput";
import ChatComponent from "../../../components/ChatComponent";

const ContactAgentScreen = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
   const [inputHeight, setInputHeight] = useState(40);
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
          <ChatComponent/>
        </ThemedView>
        <MessagingInput
          inputHeight={inputHeight}
          setInputHeight={setInputHeight}
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
    justifyContent: "flex-end", // Ensure the KeyboardAvoidingView aligns its content to the bottom
    bottom: 0,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "ce"
  },
});

export default ContactAgentScreen;
