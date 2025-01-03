import { SplashScreen, Stack } from "expo-router";
SplashScreen.preventAutoHideAsync()
export default function RootLayout() {
  const {lo}
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="(boarding)">
      <Stack.Screen name="(boarding)" />
      <Stack.Screen name="(home)"/>
    </Stack>
  );
}
