import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Input, CheckBox, Slider } from "@rneui/base";
import { Stack } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useForm, Controller } from "react-hook-form";

const RentFilters = () => {
  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      priceRange: [0, 10000],
      beds: 0,
      baths: 0,
      keywords: "",
      squareFeet: 0,
      forSaleByAgent: true,
      forSaleByOwner: false,
      newConstruction: false,
      foreclosures: false,
      comingSoon: false,
      acceptingBackupOffers: false,
      pendingUnderContract: false,
      showOnlyOpenHouses: false,
      reducedPrices: false,
    },
  });

  const backgroundColor = useThemeColor([], "background");
  const textColor = useThemeColor([], "text");
  const values = watch();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          headerRight: () =>
            JSON.stringify(values) !==
            JSON.stringify({
              priceRange: [0, 10000],
              beds: 0,
              baths: 0,
              keywords: "",
              squareFeet: 0,
              forSaleByAgent: true,
              forSaleByOwner: false,
              newConstruction: false,
              foreclosures: false,
              comingSoon: false,
              acceptingBackupOffers: false,
              pendingUnderContract: false,
              showOnlyOpenHouses: false,
              reducedPrices: false,
            }) ? (
              <ThemedText onPress={handleSubmit(onSubmit)}>Save</ThemedText>
            ) : null,
        }}
      />
      <ThemedView style={styles.container}>
        <Controller
          control={control}
          name="priceRange"
          render={({ field: { value, onChange } }) => (
            <>
              <ThemedText>
                Price Range: ${value[0]} - ${value[1]}
              </ThemedText>
              <Slider
                value={value[1]}
                maximumValue={10000}
                minimumValue={0}
                step={100}
                allowTouchTrack
                onValueChange={(val) => onChange([0, val])}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name="beds"
          render={({ field: { value, onChange } }) => (
            <>
              <ThemedText>Beds: {value}</ThemedText>
              <Slider
                value={value}
                maximumValue={4}
                minimumValue={0}
                step={1}
                allowTouchTrack
                onValueChange={onChange}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name="baths"
          render={({ field: { value, onChange } }) => (
            <>
              <ThemedText>Baths: {value}</ThemedText>
              <Slider
                value={value}
                maximumValue={5}
                minimumValue={0}
                step={1}
                allowTouchTrack
                onValueChange={onChange}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name="keywords"
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Keywords (e.g., Pool, Garage, Water Front)"
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="squareFeet"
          render={({ field: { value, onChange } }) => (
            <>
              <ThemedText>Square Feet: {value}</ThemedText>
              <Slider
                value={value}
                maximumValue={10000}
                minimumValue={0}
                step={100}
                allowTouchTrack
                onValueChange={onChange}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name="forSaleByAgent"
          render={({ field: { value, onChange } }) => (
            <CheckBox
              title="For Sale by Agent"
              containerStyle={{
                backgroundColor: backgroundColor,
              }}
              textStyle={{ color: textColor }}
              checked={value}
              onPress={() => onChange(!value)}
            />
          )}
        />

        <Controller
          control={control}
          name="forSaleByOwner"
          render={({ field: { value, onChange } }) => (
            <CheckBox
              title="For Sale by Owner"
              containerStyle={{
                backgroundColor: backgroundColor,
              }}
              textStyle={{ color: textColor }}
              checked={value}
              onPress={() => onChange(!value)}
            />
          )}
        />

        <Controller
          control={control}
          name="newConstruction"
          render={({ field: { value, onChange } }) => (
            <CheckBox
              title="New Construction"
              containerStyle={{
                backgroundColor: backgroundColor,
              }}
              textStyle={{ color: textColor }}
              checked={value}
              onPress={() => onChange(!value)}
            />
          )}
        />

        <Controller
          control={control}
          name="foreclosures"
          render={({ field: { value, onChange } }) => (
            <CheckBox
              title="Foreclosures"
              containerStyle={{
                backgroundColor: backgroundColor,
              }}
              textStyle={{ color: textColor }}
              checked={value}
              onPress={() => onChange(!value)}
            />
          )}
        />

        <Controller
          control={control}
          name="comingSoon"
          render={({ field: { value, onChange } }) => (
            <CheckBox
              title="Coming Soon"
              containerStyle={{
                backgroundColor: backgroundColor,
              }}
              textStyle={{ color: textColor }}
              checked={value}
              onPress={() => onChange(!value)}
            />
          )}
        />

        <Controller
          control={control}
          name="acceptingBackupOffers"
          render={({ field: { value, onChange } }) => (
            <CheckBox
              title="Accepting Backup Offers"
              containerStyle={{
                backgroundColor: backgroundColor,
              }}
              textStyle={{ color: textColor }}
              checked={value}
              onPress={() => onChange(!value)}
            />
          )}
        />

        <Controller
          control={control}
          name="pendingUnderContract"
          render={({ field: { value, onChange } }) => (
            <CheckBox
              title="Pending & Under Contract"
              containerStyle={{
                backgroundColor: backgroundColor,
              }}
              textStyle={{ color: textColor }}
              checked={value}
              onPress={() => onChange(!value)}
            />
          )}
        />

        <Controller
          control={control}
          name="showOnlyOpenHouses"
          render={({ field: { value, onChange } }) => (
            <CheckBox
              title="Show Only Open Houses"
              containerStyle={{
                backgroundColor: backgroundColor,
              }}
              textStyle={{ color: textColor }}
              checked={value}
              onPress={() => onChange(!value)}
            />
          )}
        />

        <Controller
          control={control}
          name="reducedPrices"
          render={({ field: { value, onChange } }) => (
            <CheckBox
              title="Reduced Prices"
              containerStyle={{
                backgroundColor: backgroundColor,
              }}
              textStyle={{ color: textColor }}
              checked={value}
              onPress={() => onChange(!value)}
            />
          )}
        />
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
});

export default RentFilters;
