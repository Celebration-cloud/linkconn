import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

import HomeHeader from '../../../../components/HomeHeader'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
const HomeScreen = () => {
  return (
    <tView style={styles.container}>
        <Stack.Screen options={{header: () => <HomeHeader/>}}/>
      <ThemedView>

      </ThemedView>
    </tView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 15,
    }
})