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
     const background = useThemeColor([], "background ")
     const tint = useThemeColor([], "tint")
  return (
    <ThemedView style={styles.container}>
      <SearchAndFilter />
      <ThemedView style={styles.chips}>
        {chips.map((chips, idx) => (
            // <Chip key={idx} title={chips} onPress={handleChipSearch}/>
            <Chip key={idx} style={{...styles.chip, backgroundColor: tint}} selectedColor={background} showSelectedOverlay={true} rippleColor="rgba(50, 30, 29, 0.73)" onPress={() => console.log('Pressed')}>{chips}</Chip>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

export default SearchHeader

const styles = StyleSheet.create({
   container: {
    padding: 15,
    gap: 10
   },
   chips: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
   },
   chip: {
    width: 70
   }
})