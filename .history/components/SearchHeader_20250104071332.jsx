import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

const SearchHeader = () => {
  return (
    <ThemeView>
      <Text>SearchHeader</Text>
    </View>
  )
}

export default SearchHeader

const styles = StyleSheet.create({})