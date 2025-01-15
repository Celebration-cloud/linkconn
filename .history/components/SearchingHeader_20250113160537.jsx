import React from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar, Button } from "react-native-elements";

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
    padding: 10,
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
