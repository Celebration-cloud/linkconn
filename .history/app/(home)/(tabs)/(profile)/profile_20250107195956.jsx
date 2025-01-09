import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "../../../../components/ThemedView";
import { ThemedText } from "../../../../components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {Chip, Image}  from '@rneui/base';
import { ImageBackground } from 'react-native';
const ProfileScreen = () => {
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView style={{ flex: 1 }}>
        <ThemedView style={styles.container}>
          <ThemedView style={styles.profilePicture}>
            <ImageBackground
              source={{
                uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
              }}
              style={{ ...styles.coverPic }}
            >
              <Image
                source={{
                  uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
                }}
                style={styles.dp}
                alt="alt"
              />
            </ImageBackground>
          </ThemedView>
          <ThemedView>
            <ThemedText type="subtitle">Nara Berry</ThemedText>.
            <ThemedText
              style={{ textAlign: "center", width: "80%" }}
              type="default"
            >
              I am a dedicated agent with a passion in help client find their
              dream home
            </ThemedText>
            <Chip
              title="Left Icon Chip"
              icon={{
                name: "star",
                type: "font-awesome",
                size: 20,
                color: "green",
              }}
              containerStyle={{}}
              buttonStyle={}
            />
          </ThemedView>

          <ThemedText>ProfileScreen</ThemedText>
        </ThemedView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -40
  },
  profilePicture: {
    position: 'relative',
    height: 240,
  },
  coverPic: {
    flex: 1,
    top: 0,
    height: 190,  
    alignItems: "center",
    justifyContent: "flex-end",
  },
  dp: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 3,
  },
  badge: {
    backgroundColor: "rgb(0, 255, 81)",
  },
})