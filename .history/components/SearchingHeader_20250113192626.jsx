import React from "react";
import { View, StyleSheet, Button, Platform } from "react-native";
import { SearchBar } from "@rneui/base";
import { useForm, Controller } from "react-hook-form";

const SearchingHeader = ({ onCancel }) => {
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

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="search"
        render={({ field: { onChange, onBlur, value } }) => (
          <SearchBar
            placeholder="Search apart, hotel, etc"
            platform={Platform.OS ===}
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.inputContainer}
            leftIconContainerStyle={styles.leftIconContainer}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {/* {searchValue ? <Button title="Cancel" onPress={() => reset()} /> : null} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainer: {
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