import { SplashScreen, Stack } from "expo-router";
SplashScreen.
export default function RootLayout() {

  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="(boarding)">
      <Stack.Screen name="(boarding)" />
      <Stack.Screen name="(home)"/>
    </Stack>
  );
}
