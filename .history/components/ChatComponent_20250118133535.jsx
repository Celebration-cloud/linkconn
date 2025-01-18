import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const ChatComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Avatar
          rounded
          source={{ uri: 'https://example.com/avatar1.png' }}
          size="small"
        />
        <View style={styles.blueBubble}>
          <Text style={styles.messageText}>
            Hi there! I'd love to help you with that. Do you have a specific location in mind?
          </Text>
        </View>
      </View>
      <View style={styles.messageContainer}>
        <Avatar
          rounded
          source={{ uri: 'https://example.com/avatar2.png' }}
          size="small"
        />
        <View style={styles.whiteBubble}>
          <Text style={styles.messageText}>
            Yes, I’m interested in the downtown area. Ideally, I want a 3-bedroom house with a backyard.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  blueBubble: {
    backgroundColor: '#d0e7ff',
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
    maxWidth: '80%',
  },
  whiteBubble: {
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
});

export default ChatComponent;
