import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'

const LoginScreen = () => {
  return (
    <View>
      <View>

      <Image containerStyle={styles.image} resizeMode='cover' source={`resource("../../assets/images/")`}/>
      </View>
      <Text>LoginScreen</Text>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({})