import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {Image}  from '@rneui/base';
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
              style={{...styles.coverPic, width: "100%", height: "100%" }}
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
    height: 250,
  },
  coverPic: {
    top: 0,
  },
  dp: {
    flex: 1,
    marginTop
    width: 100,
    height: 100,
    borderRadius: 100,
    left: 130,
    bottom: 200,
  }
})