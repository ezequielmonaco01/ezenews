import { TouchableOpacity, StyleSheet, Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useRef } from "react";
import { SearchFilter } from "./SearchFilter";
import { CalendarFilter } from "./CalendarFilter";
import { CountryFilter } from "./CountryFilter";
import { Country, countries } from "../interfaces/filters";

export const FloatingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const [search, setSearch] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [country, setCountry] = useState("us");

  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);

  const handleToggleExpansion = () => {
    const toValue = isExpanded ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsExpanded(!isExpanded);
  };

  const handleSearchPress = () => {
    setShowSearchModal(true);
    setIsExpanded(false);
  };

  const handleCalendarPress = () => {
    setShowCalendarModal(true);
    setIsExpanded(false);
  };

  const handleCountryPress = () => {
    setShowCountryModal(true);
    setIsExpanded(false);
  };

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
  };

  const handleDateSelect = (startDate: Date, endDate?: Date) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate || null);
  };

  const handleCountrySelect = (selectedCountry: Country) => {
    setCountry(selectedCountry.code);
    setShowCountryModal(false);
  };

  const searchButtonTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -60],
  });

  const calendarButtonTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -120],
  });

  const countryButtonTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -180],
  });

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const mainButtonRotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "0deg"],
  });

  return (
    <>
      <SearchFilter
        visible={showSearchModal}
        onClose={() => setShowSearchModal(false)}
        onSearch={handleSearch}
        initialValue={search}
      />

      <CalendarFilter
        visible={showCalendarModal}
        onClose={() => setShowCalendarModal(false)}
        onDateSelect={handleDateSelect}
        initialStartDate={selectedStartDate || undefined}
        initialEndDate={selectedEndDate || undefined}
      />

      <CountryFilter
        visible={showCountryModal}
        onClose={() => setShowCountryModal(false)}
        onCountrySelect={handleCountrySelect}
        selectedCountryCode={country}
        countries={countries}
      />

      <Animated.View
        style={[
          styles.secondaryButton,
          {
            transform: [{ translateY: countryButtonTranslateY }],
            opacity: opacity,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.secondaryButtonContainer}
          onPress={handleCountryPress}
        >
          <MaterialIcons name="public" size={24} color="white" />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={[
          styles.secondaryButton,
          {
            transform: [{ translateY: calendarButtonTranslateY }],
            opacity: opacity,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.secondaryButtonContainer}
          onPress={handleCalendarPress}
        >
          <MaterialIcons name="calendar-today" size={24} color="white" />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={[
          styles.secondaryButton,
          {
            transform: [{ translateY: searchButtonTranslateY }],
            opacity: opacity,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.secondaryButtonContainer}
          onPress={handleSearchPress}
        >
          <MaterialIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={[
          styles.container,
          { transform: [{ rotate: mainButtonRotation }] },
        ]}
      >
        <TouchableOpacity
          onPress={handleToggleExpansion}
          style={styles.mainButtonContainer}
        >
          <MaterialIcons name="filter-list" size={24} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 15,
    right: 15,
  },
  mainButtonContainer: {
    backgroundColor: "#2563eb",
    borderRadius: 28,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  secondaryButton: {
    position: "absolute",
    bottom: 15,
    right: 15,
  },
  secondaryButtonContainer: {
    backgroundColor: "#1e40af",
    borderRadius: 24,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
