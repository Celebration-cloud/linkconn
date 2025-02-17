import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="(boarding)">
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(boarding)" />
      {/* <Stack.Screen name="(home)"/> */}
    </Stack>
  );
}
