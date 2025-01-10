import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ListItem } from "@rneui/base";
import { useThemeColor } from "@/hooks/useThemeColor";
const DetailComponent = ({description}) => {
  const [expanded, setExpanded] = useState(false);
const backgroundColor = useThemeColor([], "background")
const textColor = useThemeColor([], "text")
  return (
    <ThemedView style={styles.container}>
      <ListItem.Accordion
        content={
          <>
            <ListItem.Content style={{backgroundColor: backgroundColor}}>
              <ListItem.Title style={{}}>View details</ListItem.Title>
            </ListItem.Content>
          </>
        }
        style={{ backgroundColor: backgroundColor }}
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        <ListItem>
          <ListItem.Content style={{ backgroundColor: backgroundColor }}>
            <ThemedText>{description}</ThemedText>
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
