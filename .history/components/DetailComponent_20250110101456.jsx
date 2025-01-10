import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ListItem } from "@rneui/base";

const AccordionComponent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ThemedView style={styles.container}>
      <ListItem.Accordion
        content={
          <>
            <Icon name="place" size={30} />
            <ListItem.Content>
              <ListItem.Title>List Accordion</ListItem.Title>
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
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Description 2</ListItem.Title>
            <ListItem.Subtitle>
              This is the description for the second item.
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </ListItem.Accordion>
    </ThView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default AccordionComponent;
