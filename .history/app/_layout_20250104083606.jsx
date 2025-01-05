import { useEffect } from "react";

import { Stack } from "expo-router";

import * as Location from "expo-location";
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
  const [ loaded, error ] = useFonts({
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
  const [location, setLocation] = useState()
  const [errorMsg, setErrorMsg] = useState()
  const handleLocation = async() => { 
    const {status} = Location.requestForegroundPermissionsAsync()
    if(!status.)
    const location = Location.getCurrentPositionAsync()
   };
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
      }
  }, [loaded, error]);

  if(!loaded && !error) {
    return null;
  }
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="(boarding)">
      <Stack.Screen name="(boarding)" />
      <Stack.Screen name="(home)" />
    </Stack>
  );
}
