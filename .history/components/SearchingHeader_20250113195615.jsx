import React, { useEffect } from "react";
import { View, StyleSheet, Button, Platform } from "react-native";
import { SearchBar } from "@rneui/base";
import { useForm, Controller } from "react-hook-form";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router, useNavigation } from "expo-router";
const SearchingHeader = ({ onCancel }) => {
  const backgroundColor = useThemeColor([], "background")
  const navigation = useNavigation()
  const { control, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Search Data:", data.search);
    // Add your search handling logic here
  };

  const searchValue = watch("search");

  const searching = useCallback

  useEffect(() => {
    
  }, []);
  

  return (
    <ThemedView style={styles.container}>
      <Controller
        control={control}
        name="search"
        render={({ field: { onChange, onBlur, value } }) => (
          <SearchBar
            placeholder="Search apart, hotel, etc"
            platform={Platform.OS === "ios" ? "ios" : "android"}
            containerStyle={{...styles.searchContainer, backgroundColor: backgroundColor}}
            inputContainerStyle={styles.inputContainer}
            leftIconContainerStyle={styles.leftIconContainer}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  searchContainer: {
    flex: 1,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainer: {
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  leftIconContainer: {
    marginLeft: 10,
  },
  cancelButton: {
    color: "#007AFF",
    marginLeft: 10,
  },
});

export default SearchingHeader;