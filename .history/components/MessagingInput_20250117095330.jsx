import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon, Button } from '@rneui/base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function MessagingInput() {
  return (
      <View style={styles.container}>
        <Button
          icon={
            <Icon
              name="plus"
              type="font-awesome"
              size={20}
              color="white"
            />
          }
          buttonStyle={styles.plusButton}
        />
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          
        />
        
        <Icon
          name="camera"
          type="font-awesome"
          size={24}
          color="gray"
          containerStyle={styles.cameraIcon}
        />
        <Icon
          name="paper-plane"
          type="font-awesome"
          size={24}
          color="gray"
          containerStyle={styles.sendIcon}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    position: "absolute",
    bottom: 0,
    paddingTop: 10,
    paddingBottom: 20
  },
  plusButton: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  cameraIcon: {
    marginRight: 10,
  },
  sendIcon: {
    marginRight: 10,
  },
});
