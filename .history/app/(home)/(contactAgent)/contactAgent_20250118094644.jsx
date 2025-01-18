import React from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform, Dimensions } from "react-native";
import { Stack } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MessagingInput from "../../../components/MessagingInput";

const ContactAgentScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // keyboardVerticalOffset={10}
        style={styles.keyboardAvoidingView}
      >
        <Stack.Screen options={{ title: "Jacob" }} />
        <View style={styles.chatContainer}>
          <ThemedText>ContactAgentScreen</ThemedText>
          {/* Here you can add chat messages */}
        <MessagingInput />
        </View>
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
    flex: 1,
    justifyContent: "flex-end", // Ensure the KeyboardAvoidingView aligns its content to the bottom
  },
  chatContainer: {
    flex: 1,
    width
    padding: 10,
  },
});

export default ContactAgentScreen;
