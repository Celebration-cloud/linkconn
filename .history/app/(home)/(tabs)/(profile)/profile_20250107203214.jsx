import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "../../../../components/ThemedView";
import { ThemedText } from "../../../../components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {Button, Chip, Image}  from '@rneui/base';
import { ImageBackground } from 'react-native';
const ProfileScreen = () => {
  const iconColor = useThemeColor([], "icon")
    const scrollOffsetY = useRef(new Animated.Value(0)).current;

    const headerHeight = scrollOffsetY.interpolate({
      inputRange: [0, 150],
      outputRange: [60, 0],
      extrapolate: "clamp",
    });

    const headerOpacity = scrollOffsetY.interpolate({
      inputRange: [0, 150],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
  return (
        <ScrollView contentContainerStyle={{flex: 1}}>
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
          <ThemedView style={styles.info}>
            <ThemedText type="subtitle">Nara Berry</ThemedText>.
            <ThemedText
              style={{ textAlign: "center", width: "80%" }}
              type="default"
            >
              I am a dedicated agent with a passion in help client find their
              dream home
            </ThemedText>
            <Chip
              title="Agent"
              icon={{
                name: "star",
                type: "font-awesome",
                size: 20,
                color: "green",
              }}
              titleStyle={{
                color: "black",
              }}
              containerStyle={{}}
              buttonStyle={styles.badge}
              radius="md"
            />
            <ThemedView style={styles.edit}>
              <Button
                title="Edit Profile"
                type="outline"
                radius="md"
                containerStyle={{width: '80%'}}
                buttonStyle={{ borderColor: iconColor }}
              />
              <Button
                icon={{
                  name: "gear",
                  type: "font-awesome",
                  size: 20,
                  color: iconColor,
                }}
                buttonStyle={{ borderColor: iconColor }}
                type="outline"
                radius="md"
              />
            </ThemedView>
          </ThemedView>

          <ThemedText>ProfileScreen</ThemedText>
        </ThemedView>
        
      </SafeAreaView>
    </SafeAreaProvider>
        </ScrollView>
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
  info: {
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
  },
  badge: {
    backgroundColor: "rgb(0, 255, 81)",
  },
  edit: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  }
})