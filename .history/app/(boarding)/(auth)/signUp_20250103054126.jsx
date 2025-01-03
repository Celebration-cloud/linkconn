import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Divider, Image } from "@rneui/base";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton, TextInput } from "react-native-paper";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";

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
  // const [checked, setChecked] = useState(false);

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
      <View style={styles.container}>
        <View style={styles.company}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={require("@/assets/images/linkconn-icon.png")}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>LINKCONN</Text>
            <Text style={styles.subTitle}>Welcome to Linkconn</Text>
          </View>
        </View>

        <View style={styles.bottomContent}>
          <Text style={styles.or}>Register and we'll get started.</Text>
          <View style={styles.form}>
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
                <View>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChange}
                    value={value}
                    mode="outlined"
                    outlineStyle={styles.outline
                    placeholder="Enter your full name"
                  />{" "}
                  {errors.fullName && (
                    <Text style={styles.errorText}>
                      {errors.fullName.message}
                    </Text>
                  )}{" "}
                </View>
              )}
              name="fullName"
            />
            <View>
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
                <Text style={styles.errorText}>{errors.email.message}</Text>
              )}
            </View>

            <View>
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
                <Text style={styles.errorText}>{errors.password.message}</Text>
              )}
            </View>
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
                <View>
                  <Text>Select Mode:</Text>
                  <RadioButton.Group onValueChange={onChange} value={value}>
                    <View style={styles.mode}>
                      <View style={styles.radioContainer}>
                        <RadioButton value="User" />
                        <Text>User</Text>
                      </View>
                      <View style={styles.radioContainer}>
                        <RadioButton value="Agent" />
                        <Text>Agent</Text>
                      </View>
                    </View>
                  </RadioButton.Group>
                  {errors.mode && (
                    <Text style={styles.errorText}>{errors.mode.message}</Text>
                  )}
                </View>
              )}
              name="mode"
            />

            <View>
              <Controller
                control={control}
                rules={{ required: "Accept terms and conditions" }}
                render={({ field: { onChange, value } }) => (
                  <View style={styles.radioContainer}>
                    <RadioButton
                      value={value}
                      status={value === true ? "checked" : "unchecked"}
                      onPress={() => onChange((checked) => !checked)}
                    />
                    <Text style={styles.policy}>
                      I accept Linkconn{" "}
                      <Text style={styles.lined}>Terms of Use</Text> and{" "}
                      <Text style={styles.lined}>Privacy Policy</Text>
                    </Text>
                  </View>
                )}
                name="checked"
              />
              {errors.checked && (
                <Text style={{ ...styles.errorText, textAlign: "center" }}>
                  {errors.checked.message}
                </Text>
              )}
            </View>
            <Button
              title="Submit"
              onPress={handleSubmit(onSubmit)}
              radius="lg"
            />
            <Text style={styles.policy}>
              Already have an account?
              <Pressable onPress={handleSwitch}>
                <Text style={styles.lined}> Login</Text>
              </Pressable>
            </Text>
          </View>
          <Divider insetType="middle" />
          <View style={styles.groupBtn}>
            {loginOptions.map((loginOptions, idx) => (
              <View key={idx} style={styles.loginOptBtn}>
                <Button
                  onPress={() => handleOptionLogin(loginOptions.handler)}
                  type="outline"
                  radius="lg"
                  buttonStyle={styles.buttonStyle}
                >
                  <Ionicons name={loginOptions.icon} size={18} />
                  {"   "}
                  <Text style={styles.loginOptText}>{loginOptions.title}</Text>
                </Button>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

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
