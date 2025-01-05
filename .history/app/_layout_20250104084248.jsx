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
import { Alert, ToastAndroid } from "react-native";

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
  const [errorMsg, setErrorMsg] = useState(null)
  const handleLocation = async() => { 
    const {status} = Location.requestForegroundPermissionsAsync()
    if(!status.granted){
      Alert.alert("Permission", "You must enable permission for this to  work", [{text: "Okay"}])
      setErrorMsg("Permission to access location was denied")
      return;
    }
    setErrorMsg(null)
    const location = Location.getCurrentPositionAsync()
    setLocation(location)
   };
   
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
      }
  }, [loaded, error]);

  if(!loaded && !error) {
    return null;
  }
  if(errorMsg){
    ToastAndroid.show(errorMsg, d)
  }
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="(boarding)">
      <Stack.Screen name="(boarding)" />
      <Stack.Screen name="(home)" />
    </Stack>
  );
}
