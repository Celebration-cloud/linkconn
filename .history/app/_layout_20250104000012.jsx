import { useEffect } from "react";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [ loaded ] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  console.log('font:', loaded)
  // useEffect(() => {
  //   if (loaded || error) {
  //     SplashScreen.hideAsync();
  //     }
  // }, [loaded, error]);

  if(loaded) {
    return SplashScreen.hideAsync();
  }
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="(boarding)">
      <Stack.Screen name="(boarding)" />
      <Stack.Screen name="(home)" />
    </Stack>
  );
}
