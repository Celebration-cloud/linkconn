import { StyleSheet } from 'react-native'

import { useRouter } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';

import { useThemeColor } from '@/hooks/useThemeColor';

import SearchInput from "./SearchInput"
import { ThemedView } from './ThemedView';

const SearchAndFilter = () => {
  const router = useRouter()
   const iconColor = useThemeColor([], "icon");
  //  const tintColor = useThemeColor([], "tint");
  //  const background = useThemeColor([], "background");
  //  const textColor = useThemeColor([], "text");
   const handleFilter = () => { 
    router.navigate("/(filter)")
    };
    const handleNavToSearch = () => { 
      router.navigate("(searching)")
     };
  return (
    <ThemedView style={styles.searchBar}>
      <SearchInput onPress={handleNavToSearch} width="85%"/>
      <Ionicons name="options-outline" color={iconColor} size={30} onPress={handleFilter} />
    </ThemedView>
  );
}

export default SearchAndFilter

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    alignItems: "center",
  },
});