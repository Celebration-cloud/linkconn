import { Alert, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import SearchHeader from '../../../../components/SearchHeader';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import MapView from 'react-native-maps';
const SearchScreen = () => {
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const handleLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission",
        "You must enable permission for this to  work",
        [{ text: "Okay" }]
      );
      setErrorMsg("Permission to access location was denied");
      return;
    }
    setErrorMsg(null);
    const location = await Location.getCurrentPositionAsync();
    setLocation(location);
  };

  useEffect(() => {
    handleLocation();
  }, []);
  if (errorMsg) {
    ToastAndroid.show(errorMsg, ToastAndroid.LONG);
  }
  console.log("location:", location);
  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ header: () => <SearchHeader/> }} />
      <ThemedText>SearchScreen</ThemedText>
      <MapView style={styles.mapView} rotateEnabled={true} region={2322302273278}/>
    </ThemedView>
  );
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    width: '100%',
    height: '100%',
  }
})