import React from 'react'

import { Pressable, StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

import HomeHeader from '../../../../components/HomeHeader'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ScrollView } from 'react-native';
const HomeScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ header: () => <HomeHeader /> }} />
      <ThemedView style={styles.houseNearBy}>
        <ThemedView style={styles.nearByHeader}>
          <ThemedText style={styles.nearBy}>New Homes Nearby</ThemedText>
          <Pressable>
            <ThemedText style={styles.seeAll}>See all</ThemedText>
          </Pressable>
        </ThemedView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        </ScrollView>
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