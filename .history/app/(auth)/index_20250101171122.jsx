import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>

      <Image containerStyle={styles.image} resizeMode='cover' source={`resource("../../assets/images/linkconn-icon.png")`}/>
      <
      </View>
      <Text>LoginScreen</Text>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({})