import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Icon, Button } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MessagingInput = () => {
  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  plusButton: {
    backgroundColor: "#34B7F1",
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
    backgroundColor: "#f0f0f0",
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default MessagingInput;
