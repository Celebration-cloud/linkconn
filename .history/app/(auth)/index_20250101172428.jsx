import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Image } from '@rneui/base'
import { Ionicons } from '@expo/vector-icons';
// import {useThemeColor} from "../../hooks/useThemeColor"

const LoginScreen = () => {
    // const tintColor = useThemeColor([], "tint")
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          containerStyle={styles.image}
          resizeMode="cover"
          source={`resource("../../assets/images/linkconn-icon.png")`}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>LinkConn</Text>
        <Text style={styles.subTitle}>Login to your account</Text>
      </View>
      <View style={styles.groupBtn}>
        <Button style={styles} type="outline" color="primary" radius="md">
            <Ionicons name='logo-google' size={15} />{"   "}
          Continue with Google
        </Button>
      </View>
      <Text>LoginScreen</Text>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 
    },
})