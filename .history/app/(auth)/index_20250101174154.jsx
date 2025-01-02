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
          source={require("../../assets/images/linkconn-icon.png")}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>LINKCONN</Text>
        <Text style={styles.subTitle}>Welcome to Linkconn</Text>
      </View>
      <View style={styles.groupBtn}>
        <Button style={styles.loginOpttn} type="outline" color="primary" radius="md">
          <Ionicons name="logo-google" size={15} />
          {"   "}
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
        marginHorizontal: 20,
        marginVertical: 20,
        gap: 10,
    },
    imageContainer: {
        width: 100,
        height: 100,
        alignSelf: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    details: {
        width: "100%",
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    title: {
        fontFamily: 'serif',
        fontSize: 20,
        textAlign: "center",
    },
    subTitle: {
        fontSize: 14,
        textAlign: "center",
    },
    groupBtn: {
        gap: 4,
    },
    b
})