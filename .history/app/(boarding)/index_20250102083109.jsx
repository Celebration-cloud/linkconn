import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Image } from '@rneui/base';

const Index = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("@/assets/images/linkconn-icon.png")}
        />
      </View>

      <Text style={styles.title}>Linkconn</Text>
      <Text style={styles.subTitle}>
        Discover skilled individuals in your community
      </Text>
      </View>
      
      <View style={styles.storyContainer}>
        <Image
          source={require("../../assets/images/Meeting.gif")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <Button buttonStyle={styles.btn} title="Get Started" radius="lg" />
    </View>
  );
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
    justifyContent: "space-between",
    gap: 
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
    height: "50%"
  },
});