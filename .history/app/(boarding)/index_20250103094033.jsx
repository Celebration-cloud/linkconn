import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { useRouter } from 'expo-router';

import { Button, Image } from '@rneui/base';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

const Index = () => {
  const router = useRouter()
  const tint = useThemeColor([], "tint")
  const handleStart = () => { 
    router.replace("(auth)")
   };
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.top}>
        <ThemedView style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={require("@/assets/images/linkconn-icon.png")}
          />
        </ThemedView>

        <ThemedText style={styles.title}>Linkconn</ThemedText>
        <ThemedText style={styles.subTitle}>
          Discover skilled individuals in your community
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.storyContainer}>
        <Image
          resizeMode="cover"
          source={require("@/assets/images/Meeting-bro.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </ThemedView>
      <Button onPress={handleStart} title="Get Started" radius="lg" />
    </ThemedView>
  );
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    gap: 30
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
  subTitle: {
    textAlign: "center",
  },
  imageContainer: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 30,
    overflow: "hidden",
    
  },
  top: {
    gap: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  storyContainer: {
    width: "100%",
    height: "40%"
  },
});