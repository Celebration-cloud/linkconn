import React, { useEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform, Dimensions, Keyboard } from "react-native";
import { Stack } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MessagingInput from "../../../components/MessagingInput";

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
        keyboardVerticalOffset={keyboardVisible && 160}
        style={styles.keyboardAvoidingView}
      >
        <Stack.Screen options={{ title: "Jacob" }} />
        <View style={styles.chatContainer}>
          <ThemedText>ContactAgentScreen</ThemedText>
          {/* Here you can add chat messages */}
        </View>
      </KeyboardAvoidingView>
        <MessagingInput inputHeight={inputHeight} setInputHeight={setInputHeight} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE5DD",
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "flex-end", // Ensure the KeyboardAvoidingView aligns its content to the bottom
    bottom: 0
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
});

export default ContactAgentScreen;
