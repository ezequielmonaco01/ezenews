import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { FilterModal } from "./FilterModal";

interface SearchFilterProps {
  visible: boolean;
  onClose: () => void;
  onSearch: (searchTerm: string) => void;
  initialValue?: string;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  visible,
  onClose,
  onSearch,
  initialValue = "",
}) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleConfirm = () => {
    onSearch(searchTerm);
  };

  const handleCancel = () => {
    setSearchTerm(initialValue);
  };

  return (
    <FilterModal
      visible={visible}
      onClose={onClose}
      title="Buscar Noticias"
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      confirmText="Buscar"
    >
      <TextInput
        style={styles.searchInput}
        placeholder="Escribe para buscar..."
        placeholderTextColor="#999"
        value={searchTerm}
        onChangeText={setSearchTerm}
        autoFocus={true}
        returnKeyType="search"
        onSubmitEditing={handleConfirm}
      />
    </FilterModal>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
});
