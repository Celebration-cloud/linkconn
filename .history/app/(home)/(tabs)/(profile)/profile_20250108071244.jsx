import React, { useRef } from 'react'

import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ImageBackground } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {Button, Chip, Image}  from '@rneui/base';

import { useThemeColor } from "@/hooks/useThemeColor";

import { ThemedText } from "../../../../components/ThemedText";
import { ThemedView } from "../../../../components/ThemedView";
import CardComponent from "../../../../components/CardComponent";
import { FAB } from 'react-native-paper';

const ProfileScreen = () => {
  const iconColor = useThemeColor([], "icon")
  return (
    <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        
          <ThemedView style={styles.container}>
           <ScrollView>
            
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
                />
              </ImageBackground>
            </ThemedView>
            <ThemedView style={styles.info}>
              <ThemedText type="subtitle">Nara Berry</ThemedText>
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
                  containerStyle={{ width: "80%" }}
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
            <ThemedView style={{ paddingHorizontal: 15 }}>
              <ThemedText type="subtitle">Posts</ThemedText>
              <ThemedView style={styles.content}>
                <CardComponent />
                <CardComponent />
              </ThemedView>
            </ThemedView>
            </ScrollView>
          <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => console.log("Pressed")}
            label='Post New Property'
          />
          </ThemedView>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -40,
    gap: 20,
  },
  profilePicture: {
    position: "relative",
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
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(0, 255, 81)",
    elevation: 5,
  },
});