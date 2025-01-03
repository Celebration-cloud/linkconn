import { ThemedText } from "@/components/ThemedText";
import { Stack } from "expo-router";
ThemedText
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="(boarding)">
      <Stack.Screen name="(boarding)" />
      <Stack.Screen name="(home)"/>
    </Stack>
  );
}
