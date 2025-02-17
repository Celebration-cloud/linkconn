import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { useRouter } from 'expo-router';

import { Button, Image } from '@rneui/base';

const Index = () => {
  const router = useRouter()
  const handleStart = () => { 
    router.replace("(auth)")
   };
  return (
    <T style={styles.container}>
      <T>
        <T style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("@/assets/images/linkconn-icon.png")}
        />
      </T>

      <Text style={styles.title}>Linkconn</Text>
      <Text style={styles.subTitle}>
        Discover skilled individuals in your community
      </Text>
      </T>
      
      <T style={styles.storyContainer}>
        <Image
        resizeMode='cover'
          source={require("@/assets/images/Meeting-bro.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </T>
      <Button onPress={handleStart} buttonStyle={styles.btn} title="Get Started" radius="lg" />
    </T>
  );
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
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
  image: {
    width: "100%",
    height: "100%",
  },
  storyContainer: {
    width: "100%",
    height: "40%"
  },
});