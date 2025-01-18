import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Icon, Button } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MessagingInput = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Button
          icon={
            <Icon name="plus" type="font-awesome" size={20} color="white" />
          }
          buttonStyle={styles.plusButton}
        />
        <TextInput style={styles.input} placeholder="Type a message" />
        <Icon
          name="camera"
          type="font-awesome"
          size={24}
          color="gray"
          style={styles.icon}
        />
        <Icon
          name="paper-plane"
          type="font-awesome"
          size={24}
          color="gray"
          style={styles.icon}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8", // WhatsApp-like light gray background
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderRadius: 30,
    backgroundColor: "#ffffff", // White background
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 2, // Adds shadow for Android
    shadowColor: "#000", // Adds shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  plusButton: {
    backgroundColor: "#34B7F1", // WhatsApp-like blue color
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    backgroundColor: "#f0f0f0", // WhatsApp-like light gray input background
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default MessagingInput;
