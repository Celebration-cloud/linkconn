import React from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Stack } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MessagingInput from "../../../components/MessagingInput";

const ContactAgentScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: "Jacob" }} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView
          contentContainerStyle={styles.chatContainer}
          keyboardShouldPersistTaps="handled"
        >
          <ThemedText>ContactAgentScreen</ThemedText>
          {/* Here you can add chat messages */}
        </ScrollView>
        <MessagingInput />
      </KeyboardAvoidingView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE5DD",
  },
  keyboardAvoidingView: {
    flex: 10,
  },
  chatContainer: {
    flexGrow: 1,
    padding: 10,
    justifyContent: "flex-end", // Ensure messages are at the bottom
  },
});

export default ContactAgentScreen;
