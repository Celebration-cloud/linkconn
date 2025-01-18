import React from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { Stack } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MessagingInput from "../../../components/MessagingInput";

const ContactAgentScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
        contentContainerStyle={{height: "90%", bottom: 20}}
        style={styles.keyboardAvoidingView}
      >
      <Stack.Screen options={{ title: "Jacob" }} />
        <View style={styles.chatContainer}>
          <ThemedText>ContactAgentScreen</ThemedText>
          {/* Here you can add chat messages */}
        </View>
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
    flex: 1,
    justifyContent: "flex-end", // Ensure the KeyboardAvoidingView aligns its content to the bottom
    bottom: -100
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
});

export default ContactAgentScreen;
