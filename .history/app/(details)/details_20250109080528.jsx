import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Button, Card } from '@rneui/base';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const DetailsScreen = () => {
   const textColor = useThemeColor([], "text")
  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <View style={styles.headerRight}>
              <Button size="md" color="white" radius="xl">
                <Ionicons name="heart-outline" size={25} />
              </Button>
            </View>
          ),
          headerTransparent: true,
          headerTitle: "",
          headerTitleStyle: {
            color: textColor,
          },
        }}
      />
      <Card.Image
        source={{
          uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
        }}
        resizeMode="stretch"
        style={styles.image}
      />
      <ThemedText>DetailsScreen</ThemedText>
      <ThemedText>kcmemkmekkkkkkkkkkkkkkkkkkkkkkkkkkkkk</ThemedText>
    </ThemedView>
  );
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: Dimensions.get("window").height / 3,
  },
});