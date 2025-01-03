import React, { useState } from "react";

import { Pressable, ScrollView, StyleSheet } from "react-native";

import { useRouter } from "expo-router";

import { Button, Divider, Image } from "@rneui/base";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
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
  const [passwordVisible, setPasswordVisible] = useState(true);
  const iconColor = useThemeColor([], "icon")
  const tintColor = useThemeColor([], "tint")

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      checked: false,
      mode: "",
    }
  });

  const handleOptionLogin = (method) => {
    console.log(method);
  };

  const handleSwitch = () => {
    router.dismiss()
  };

  const onSubmit = (data) => {
    console.log(data);
    reset()
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
            <ThemedText style={styles.title}>LINKCONN</ThemedText>
            <ThemedText style={styles.subTitle}>Welcome to Linkconn</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.bottomContent}>
          <ThemedText style={styles.or}>Register and we'll get started.</ThemedText>
          <ThemedView style={styles.form}>
            <Controller
              control={control}
              rules={{
                required: "Full Name is required",
                minLength: {
                  value: 3,
                  message: "Full Name must be at least 3 characters long",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <ThemedView>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChange}
                    label="Full Name"
                    value={value}
                    error={errors.name}
                    mode="outlined"
                    outlineStyle={styles.inputOutline}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <ThemedText style={styles.errorText}>
                      {errors.name.message}
                    </ThemedText>
                  )}
                </ThemedView>
              )}
              name="name"
            />
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
                <ThemedText style={styles.errorText}>{errors.email.message}</ThemedText>
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
                <ThemedText style={styles.errorText}>{errors.password.message}</ThemedText>
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
                  <ThemedText>Select Mode:</ThemedText>
                  <RadioButton.Group onValueChange={onChange} value={value}>
                    <ThemedView style={styles.mode}>
                      <ThemedView style={styles.radioContainer}>
                        <RadioButton value="User" />
                        <ThemedText>User</ThemedText>
                      </ThemedView>
                      <ThemedView style={styles.radioContainer}>
                        <RadioButton value="Agent" />
                        <ThemedText>Agent</ThemedText>
                      </ThemedView>
                    </ThemedView>
                  </RadioButton.Group>
                  {errors.mode && (
                    <ThemedText style={styles.errorText}>{errors.mode.message}</ThemedText>
                  )}
                </ThemedView>
              )}
              name="mode"
            />

            <ThemedView>
              <Controller
                control={control}
                rules={{ required: "Accept terms and conditions" }}
                render={({ field: { onChange, value } }) => (
                  <ThemedView style={styles.radioContainer}>
                    <RadioButton
                      value={value}
                      status={value === true ? "checked" : "unchecked"}
                      onPress={() => onChange((checked) => !checked)}
                    />
                    <ThemedText style={styles.policy}>
                      I accept Linkconn{" "}
                      <ThemedText style={styles.lined}>Terms of Use</ThemedText> and{" "}
                      <ThemedText style={styles.lined}>Privacy Policy</ThemedText>
                    </ThemedText>
                  </ThemedView>
                )}
                name="checked"
              />
              {errors.checked && (
                <ThemedText style={{ ...styles.errorText, textAlign: "center" }}>
                  {errors.checked.message}
                </ThemedText>
              )}
            </ThemedView>
            <Button
              title="Submit"
              onPress={handleSubmit(onSubmit)}
              radius="lg"
            />
            <ThemedText style={styles.policy}>
              Already have an account?
              <Pressable onPress={handleSwitch}>
                <ThemedText style={styles.lined}> Login</ThemedText>
              </Pressable>
            </ThemedText>
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
                  {"   "}
                  <ThemedText style={styles.loginOptText}>{loginOptions.title}</ThemedText>
                </Button>
              </ThemedView>
            ))}
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
};

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
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: 10,
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
    marginVertical: 2,
    marginBottom: -12,
  },
  mode: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
