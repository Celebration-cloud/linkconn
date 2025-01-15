import { SearchBar } from "@rneui/base";
import React from "react";
import { View, StyleSheet } from "react-native";

const SearchingHeader = () => {
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search apart, hotel, etc"
        platform="default"
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
        leftIconContainerStyle={styles.leftIconContainer}
        
      />
      {/* <Button title="Cancel" type="clear" titleStyle={styles.cancelButton} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingT
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
