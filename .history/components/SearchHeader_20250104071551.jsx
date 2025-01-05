import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import SearchAndFilter from './SearchAndFilter';

const SearchHeader = () => {
  return (
    <ThemedView>
      <SearchAndFilter />
      <ThemedView>
        <Chi
      </ThemedView>
    </ThemedView>
  )
}

export default SearchHeader

const styles = StyleSheet.create({})