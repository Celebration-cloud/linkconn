import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Input, CheckBox, Slider, Text } from "@rneui/base";

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

  const handlePriceChange = (value) =>
    setPriceRange(value.map((v) => Math.round(v)));
  const handleBedsChange = (value) => setBeds(Math.round(value));
  const handleBathsChange = (value) => setBaths(Math.round(value));
  const handleSquareFeetChange = (value) => setSquareFeet(Math.round(value));

  return (
    <ScrollView style={styles.container}>
      <View>
        
      <Text h4>For Rent Filters</Text>

      <Text>
        Price Range: ${priceRange[0]} - ${priceRange[1]}
      </Text>
      <Slider
      value={pr}
        // value={priceRange}
        // onValueChange={handlePriceChange}
        // maximumValue={10000}
        // minimumValue={0}
        // step={100}
        // allowTouchTrack
      />
      </View>
{/* 
      <Text>Beds: {beds}</Text>
      <Slider
        value={beds}
        onValueChange={handleBedsChange}
        maximumValue={4}
        minimumValue={0}
        step={1}
        allowTouchTrack
      />

      <Text>Baths: {baths}</Text>
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

      <Text>Square Feet: {squareFeet}</Text>
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
      /> */}
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
