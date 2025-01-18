import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Icon, Button } from "@rneui/base";
import Octicons from "@expo/vector-icons/Octicons";

const MessagingInput = ({ inputHeight, setInputHeight, onSendMessage }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage(text);
      setText("");
      setInputHeight(40); // Reset input height after sending a message
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.innerContainer}>
          <Button
            icon={<Icon name="camera" type="entypo" size={20} color="white" />}
            buttonStyle={styles.plusButton}
          />
          <TextInput
            style={{ ...styles.input, height: inputHeight }}
            placeholder="Type a message"
            value={text}
            onChangeText={setText}
            onContentSizeChange={(event) =>
              setInputHeight(event.nativeEvent.contentSize.height)
            }
            multiline={true}
          />
          <Button radius="lg" size="md" onPress={handleSend}>
            <Octicons name="paper-airplane" size={20} color="black" />
          </Button>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.81)",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    borderRadius: 30,
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
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    maxHeight: 150,
    minHeight: 40,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    backgroundColor: "#f0f0f0",
  },
  icon: {
    marginHorizontal: 5,
    alignSelf: "flex-start",
  },
});

export default MessagingInput;
