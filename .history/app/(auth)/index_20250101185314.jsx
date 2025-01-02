import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Divider, Image } from '@rneui/base'
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
// import {useThemeColor} from "../../hooks/useThemeColor"

const loginOptions = [
  { title: "Continue with Google", handler: "google", icon: "logo-google" },
  {
    title: "Continue with Facebook",
    handler: "facebook",
    icon: "logo-facebook",
  },
  { title: "Sign In with Apple", handler: "apple", icon: "logo-apple" },
];
const LoginScreen = () => {
    // const tintColor = useThemeColor([], "tint")
const handleOptionLogin = (method) => {
    console.log(method)
}
  return (
    <View style={styles.container}>
      <View style={styles.company}>
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
      </View>

      <Divider />
      <View style={styles.bottomContent}>
        <Text style={styles.or}>
          Register or Sign In and we'll get started.
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            label="Email"
            mode="outlined"
            outlineStyle={styles.inputOutline}
          />
          <Button title="Submit" radius="lg" />
        </View>
        <Text style={styles.policy}>
          I accept Manson <Text style={styles.lined}>Terms of Use</Text> and
          <Text style={styles.lined}>Privacy Policy</Text>
        </Text>
      </View>
      <Text style={styles.skip}>Skip</Text>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
    gap: 30,
  },
  company: {
    gap: 20,
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
    fontFamily: "serif",
    fontSize: 20,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 14,
    textAlign: "center",
  },
  groupBtn: {
    gap: 10,
    marginTop: 20,
  },
  loginOptBtn: {
    width: "100%",
    color: "white",
    borderColor: "green",
  },
  loginOptText: {
    fontSize: 17,
  },
  buttonStyle: {
    borderColor: "grey",
  },
  or: {
    textAlign: "center",
  },
  bottomContent: {
    gap: 10,
  },
  inputOutline: { borderRadius: 10 },
  form: {
    gap: 20,
  },
  policy: {
    textAlign: "center",
  },
  lined: {
    color: "blue",
    textDecorationLine: "underline",
  },
  skip: {
    textAlign: "center",
    color: "blue",
    fontSize: 15,
    textDecorationLine: "underline",
    marginTop: 30
  }
});