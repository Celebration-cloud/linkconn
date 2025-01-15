import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Input, CheckBox, Slider, } from "@rneui/base";
import { Stack } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const RentFilters = () => {
  const backgroundColor = useThemeColor([], "background")
  const textColor = useThemeColor([], "text")
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [keywords, setKeywords] = useState("");
  const [squareFeet, setSquareFeet] = useState(0);
  const [forSaleByAgent, setForSaleByAgent] = useState(true);
  const [forSaleByOwner, setForSaleByOwner] = useState(false);
  const [newConstruction, setNewConstruction] = useState(false);
  const [foreclosures, setForeclosures] = useState(false);
  const [comingSoon, setComingSoon] = useState(false);
  const [acceptingBackupOffers, setAcceptingBackupOffers] = useState(false);
  const [pendingUnderContract, setPendingUnderContract] = useState(false);
  const [showOnlyOpenHouses, setShowOnlyOpenHouses] = useState(false);
  const [reducedPrices, setReducedPrices] = useState(false);

  const handlePriceChange = (value) => {
    setPriceRange([0, value]);
  };
  const handleBedsChange = (value) => setBeds(Math.round(value));
  const handleBathsChange = (value) => setBaths(Math.round(value));
  const handleSquareFeetChange = (value) => setSquareFeet(Math.round(value));

  return (
    <ScrollView>
      <Stack.Screen
        options={{ headerRight: () => <ThemedText>Save</ThemedText> }}
      />
      <ThemedView style={styles.container}>
        <ThemedText>
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </ThemedText>
        <Slider
          value={priceRange[1]}
          maximumValue={10000}
          minimumValue={0}
          step={100}
          allowTouchTrack
          onValueChange={handlePriceChange}
        />

        <ThemedText>Beds: {beds}</ThemedText>
        <Slider
          value={beds}
          onValueChange={handleBedsChange}
          maximumValue={4}
          minimumValue={0}
          step={1}
          allowTouchTrack
        />

        <ThemedText>Baths: {baths}</ThemedText>
        <Slider
          value={baths}
          onValueChange={handleBathsChange}
          maximumValue={5}
          minimumValue={0}
          step={1}
          allowTouchTrack
        />

        <Input
          placeholder="Keywords (e.g., Pool, Garage, Water Front)"
          value={keywords}
          onChangeText={setKeywords}
        />

        <ThemedText>Square Feet: {squareFeet}</ThemedText>
        <Slider
          value={squareFeet}
          onValueChange={handleSquareFeetChange}
          maximumValue={10000}
          minimumValue={0}
          step={100}
          allowTouchTrack
        />

        <CheckBox
          title="For Sale by Agent"
          containerStyle={{
            backgroundColor: backgroundColor,
          }}
        textSstyle={{ color: textColor }}
          checked={forSaleByAgent}
          onPress={() => setForSaleByAgent(!forSaleByAgent)}
        />
        <CheckBox
          title="For Sale by Owner"
          checked={forSaleByOwner}
          onPress={() => setForSaleByOwner(!forSaleByOwner)}
        />
        <CheckBox
          title="New Construction"
          checked={newConstruction}
          onPress={() => setNewConstruction(!newConstruction)}
        />
        <CheckBox
          title="Foreclosures"
          checked={foreclosures}
          onPress={() => setForeclosures(!foreclosures)}
        />
        <CheckBox
          title="Coming Soon"
          checked={comingSoon}
          onPress={() => setComingSoon(!comingSoon)}
        />
        <CheckBox
          title="Accepting Backup Offers"
          checked={acceptingBackupOffers}
          onPress={() => setAcceptingBackupOffers(!acceptingBackupOffers)}
        />
        <CheckBox
          title="Pending & Under Contract"
          checked={pendingUnderContract}
          onPress={() => setPendingUnderContract(!pendingUnderContract)}
        />
        <CheckBox
          title="Show Only Open Houses"
          checked={showOnlyOpenHouses}
          onPress={() => setShowOnlyOpenHouses(!showOnlyOpenHouses)}
        />
        <CheckBox
          title="Reduced Prices"
          checked={reducedPrices}
          onPress={() => setReducedPrices(!reducedPrices)}
        />
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default RentFilters;
