import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { SafeAreaView } from 'react-native-safe-area-context';
const ProfileScreen = () => {
  return (
    <
    <SafeAreaView>

    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})