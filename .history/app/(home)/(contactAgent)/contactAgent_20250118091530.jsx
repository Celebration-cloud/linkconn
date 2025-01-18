import React from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { Stack } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MessagingInput from "../../../components/MessagingInput";

const ContactAgentScreen = () => {
  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: "Jacob" }} />
        <View style={styles.chatContainer}>
          <ThemedText>ContactAgentScreen</ThemedText>
          {/* Here you can add chat messages */}
        </View>
        <MessagingInput />
    </ThemedView>
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE5DD",
  },
  keyboardAvoidingView: {
    justifyContent: "flex-end", // Ensure the KeyboardAvoidingView aligns its content to the bottom
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
});

export default ContactAgentScreen;
