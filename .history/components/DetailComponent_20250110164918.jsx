import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Icon, ListItem } from "@rneui/base";
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from "@expo/vector-icons";
const DetailComponent = ({description}) => {
  const [expanded, setExpanded] = useState(false);
const backgroundColor = useThemeColor([], "background")
const textColor = useThemeColor([], "text")
  return (
    <ThemedView style={styles.container}>
      <ListItem.Accordion
        content={
          <>
            <ListItem.Content>
              <ListItem.Title>
                View details
              </ListItem.Title>
            </ListItem.Content>
          </>
        }
        containerStyle={{ backgroundColor: textColor, color: textColor }}
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
        Icon={<Icon name="chevron-forward" type="material-community" />}
        expandIcon={
          <Ionicons
            name="chevron-down"
            size={20}
          />
        }
      >
        <ListItem containerStyle={{ backgroundColor: backgroundColor, padding: 0 }}>
          <ListItem.Content style={{ backgroundColor: "grey", padding: 10, borderRadius: 10}}>
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
