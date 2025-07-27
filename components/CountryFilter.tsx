import React, { useState } from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FilterModal } from "./FilterModal";
import { Country } from "../interfaces/filters";

interface CountryFilterProps {
  visible: boolean;
  onClose: () => void;
  onCountrySelect: (country: Country) => void;
  selectedCountryCode?: string;
  countries: Country[];
}

export const CountryFilter: React.FC<CountryFilterProps> = ({
  visible,
  onClose,
  onCountrySelect,
  selectedCountryCode,
  countries,
}) => {
  const [tempSelectedCountry, setTempSelectedCountry] = useState<string>(
    selectedCountryCode || ""
  );

  const handleCountryPress = (country: Country) => {
    setTempSelectedCountry(country.code);
    onCountrySelect(country);
  };

  const handleCancel = () => {
    setTempSelectedCountry(selectedCountryCode || "");
  };

  return (
    <FilterModal
      visible={visible}
      onClose={onClose}
      title="Seleccionar País"
      showButtons={false} // No mostramos botones ya que la selección es inmediata
    >
      <FlatList
        data={countries}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.countryItem,
              selectedCountryCode === item.code && styles.selectedCountryItem,
            ]}
            onPress={() => handleCountryPress(item)}
          >
            <Text style={styles.countryFlag}>{item.flag}</Text>
            <Text
              style={[
                styles.countryName,
                selectedCountryCode === item.code && styles.selectedCountryName,
              ]}
            >
              {item.name}
            </Text>
            {selectedCountryCode === item.code && (
              <MaterialIcons name="check" size={20} color="#2563eb" />
            )}
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        style={styles.countryList}
      />
    </FilterModal>
  );
};

const styles = StyleSheet.create({
  countryList: {
    maxHeight: 300,
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 5,
  },
  selectedCountryItem: {
    backgroundColor: "#eff6ff",
  },
  countryFlag: {
    fontSize: 24,
    marginRight: 15,
  },
  countryName: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  selectedCountryName: {
    color: "#2563eb",
    fontWeight: "600",
  },
});
