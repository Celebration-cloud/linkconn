import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ListItem } from "@rneui/base";

const DetailComponent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ThemedView style={styles.container}>
      <ListItem.Accordion
        content={
          <>
            <ListItem.Content>
              <ListItem.Title>View details</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Description 1</ListItem.Title>
            <ListItem.Subtitle>
              This is the description for the first item.
            </ListItem.Subtitle>
            <ListItem.Content>
                
            </ListItem.Content>
          </ListItem.Content>
        </ListItem>
      </ListItem.Accordion>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetailComponent;
