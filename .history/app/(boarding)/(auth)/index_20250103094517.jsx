import React, { useState } from 'react';

import { Pressable, ScrollView, StyleSheet, } from 'react-native';

import { useRouter } from 'expo-router';

import { Button, Divider, Image } from '@rneui/base';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton, TextInput } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const loginOptions = [
  { title: "Continue with Google", handler: "google", icon: "logo-google" },
  {
    title: "Continue with Facebook",
    handler: "facebook",
    icon: "logo-facebook",
  },
];

const LoginScreen = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      mode: "",
    },
  });

  const handleOptionLogin = (method) => {
    console.log(method);
    router.replace("(home)");
  };

  const handleSwitch = () => {
    router.navigate("/signUp");
  };

  const onSubmit = (data) => {
    console.log(data);
    reset()
    router.replace("(home)")
  };

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.company}>
          <ThemedView style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={require("@/assets/images/linkconn-icon.png")}
            />
          </ThemedView>
          <ThemedView style={styles.details}>
            <Theme style={styles.title}>LINKCONN</Theme>
            <Theme style={styles.subTitle}>Welcome to Linkconn</Theme>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.bottomContent}>
          <Theme style={styles.or}>Sign In</Theme>
          <ThemedView style={styles.form}>
            <ThemedView>
              <Controller
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email format",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    label="Email"
                    keyboardType="email-address"
                    error={errors.email}
                    mode="outlined"
                    outlineStyle={styles.inputOutline}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
              />
              {errors.email && (
                <Theme style={styles.errorText}>{errors.email.message}</Theme>
              )}
            </ThemedView>

            <ThemedView>
              <Controller
                control={control}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    label="Password"
                    mode="outlined"
                    error={errors.password}
                    secureTextEntry={passwordVisible}
                    right={
                      <TextInput.Icon
                        onPress={() => setPasswordVisible((prev) => !prev)}
                        icon={passwordVisible ? "eye" : "eye-off"}
                      />
                    }
                    outlineStyle={styles.inputOutline}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="password"
              />
              {errors.password && (
                <Theme style={styles.errorText}>{errors.password.message}</Theme>
              )}
            </ThemedView>
            <Controller
              control={control}
              rules={{
                required: "Mode is required",
                minLength: {
                  value: 4,
                  message: "Mode must be at least 4 characters long",
                },
                validate: (value) =>
                  value !== "invalid" || "Invalid mode selected",
              }}
              render={({ field: { onChange, value } }) => (
                <ThemedView>
                  <Theme>Select Mode:</Theme>
                  <RadioButton.Group onValueChange={onChange} value={value}>
                    <ThemedView style={styles.mode}>
                      <ThemedView style={styles.radioContainer}>
                        <RadioButton value="User" />
                        <Theme>User</Theme>
                      </ThemedView>
                      <ThemedView style={styles.radioContainer}>
                        <RadioButton value="Agent" />
                        <Theme>Agent</Theme>
                      </ThemedView>
                    </ThemedView>
                  </RadioButton.Group>
                  {errors.mode && (
                    <Theme style={styles.errorText}>{errors.mode.message}</Theme>
                  )}
                </ThemedView>
              )}
              name="mode"
            />

            <Button
              title="Login"
              onPress={handleSubmit(onSubmit)}
              radius="lg"
            />
            <Theme style={styles.policy}>
              Don't have an account?
              <Pressable onPress={handleSwitch}>
                <Theme style={styles.lined}> SignUp</Theme>
              </Pressable>
            </Theme>
          </ThemedView>
          <Divider insetType="middle" />
          <ThemedView style={styles.groupBtn}>
            {loginOptions.map((loginOptions, idx) => (
              <ThemedView key={idx} style={styles.loginOptBtn}>
                <Button
                  onPress={() => handleOptionLogin(loginOptions.handler)}
                  type="outline"
                  radius="lg"
                  buttonStyle={styles.buttonStyle}
                >
                  <Ionicons name={loginOptions.icon} size={18} />
                  <Theme style={styles.loginOptText}>{loginOptions.title}</Theme>
                </Button>
              </ThemedView>
            ))}
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 30,
  },
  company: {
    gap: 20,
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
  errorText: {
    color: "red",
  },
  groupBtn: {
    gap: 10,
    marginVertical: 20,
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
    fontWeight: "light",
    fontSize: 18,
  },
  bottomContent: {
    gap: 10,
  },
  inputOutline: { borderRadius: 10 },
  form: {
    gap: 20,
    marginBottom: 10,
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
    marginTop: 2,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  mode: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
});