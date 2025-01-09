import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Card } from '@rneui/base';
const DetailsScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <Card.Image
        source={{
          uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
        }}
        style={{ borderRadius: 10, width: "100%", height: 200}}
      />
      <ThemedText>DetailsScreen</ThemedText>
      <ThemedText>kcmemkmekkkkkkkkkkkkkkkkkkkkkkkkkkkkk</ThemedText>
    </ThemedView>
  );
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})