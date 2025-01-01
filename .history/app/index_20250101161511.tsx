import { ThemedView } from "@/components/ThemedView";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Theme>Edit app/index.tsx to edit this.</Theme>
    </ThemedView>
  );
}
