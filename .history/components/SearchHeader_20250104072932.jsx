import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import SearchAndFilter from './SearchAndFilter';
import { Chip } from 'react-native-paper';
// import { Chip } from '@rneui/base';

const chips = [
    "Local Info",
    "Save Search",
    "List"
]
const SearchHeader = () => {
    const handleChipSearch = (type) => { 
        console.log(`Searching ${type}`);
     };
  return (
    <ThemedView>
      <SearchAndFilter />
      <ThemedView>
        {chips.map((chips, idx) => (
            // <Chip key={idx} title={chips} onPress={handleChipSearch}/>
            <Chip rippleColor="rgba(228, 219, 219, 0) 0)" onPress={() => console.log('Pressed')}>{chips}</Chip>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

export default SearchHeader

const styles = StyleSheet.create({})