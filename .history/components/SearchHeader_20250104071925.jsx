import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import SearchAndFilter from './SearchAndFilter';
import { Chip } from '@rneui/base';

const chips = [
    "Local Info",
    "Save Search",
    "List"
]
const SearchHeader = () => {
  return (
    <ThemedView>
      <SearchAndFilter />
      <ThemedView>
        {chips.map((chips, idx))}
        <Chip title="Local Info" onPress={() => } />
      </ThemedView>
    </ThemedView>
  );
}

export default SearchHeader

const styles = StyleSheet.create({})