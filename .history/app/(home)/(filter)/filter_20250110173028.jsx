import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Input, CheckBox, Slider, Text } from "react-native-elements";

const RentFilters = () => {
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
  const [includeEstimates, setIncludeEstimates] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text h4>For Rent Filters</Text>

      <Text>
        Price Range: ${priceRange[0]} - ${priceRange[1]}
      </Text>
      <Slider
        value={priceRange}
        onValueChange={setPriceRange}
        maximumValue={10000}
        minimumValue={0}
        step={100}
        allowTouchTrack
      />

      <Text>Beds: {beds}</Text>
      <Slider
        value={beds}
        onValueChange={setBeds}
        maximumValue={4}
        minimumValue={0}
        step={1}
        allowTouchTrack
      />

      <Text>Baths: {baths}</Text>
      <Slider
        value={baths}
        onValueChange={setBaths}
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

      <Text>Square Feet: {squareFeet}</Text>
      <Slider
        value={squareFeet}
        onValueChange={setSquareFeet}
        maximumValue={10000}
        minimumValue={0}
        step={100}
        allowTouchTrack
      />

      <CheckBox
        title="For Sale by Agent"
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default RentFilters;
