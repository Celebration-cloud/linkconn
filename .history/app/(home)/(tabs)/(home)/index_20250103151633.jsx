import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

import HomeHeader from '../../../../components/HomeHeader'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
const HomeScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ header: () => <HomeHeader /> }} />
      <ThemedView>
        <ThemedView>
          <ThemedText>New Homes Nearby</ThemedText>
          <Pressable>
            
          </Pressable>
          <ThemedText>See all</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 15,
    }
})