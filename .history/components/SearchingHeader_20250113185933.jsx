import React from "react";
import { View, StyleSheet } from "react-native";
/* The line `import { SearchBar, Button } from "react-native-elements";` is importing the `SearchBar`
and `Button` components from the `react-native-elements` library. These components are UI elements
provided by the `react-native-elements` library that can be used in a React Native application to
create a search bar and a button with specific styling and functionality. */
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
