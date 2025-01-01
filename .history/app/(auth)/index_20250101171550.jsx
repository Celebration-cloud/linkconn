import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Image } from '@rneui/base'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>

      <Image containerStyle={styles.image} resizeMode='cover' source={`resource("../../assets/images/linkconn-icon.png")`}/>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>LinkConn</Text>
        <Text style={styles.subTitle}>Login to your account</Text>
      </View>
      <View>
        <Button style={styles} t></Button>
      </View>
      <Text>LoginScreen</Text>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({})