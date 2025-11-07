import React from "react";
import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles, Colors } from "../src/presentation/styles/globalStyles";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = "Buscar personajes...",
}) => {
  return (
    <View style={globalStyles.searchContainer}>
      <Ionicons
        name="search"
        size={20}
        color={Colors.textSecondary}
        style={globalStyles.searchIcon}
      />
      <TextInput
        style={globalStyles.searchInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.textSecondary}
      />
      {value.length > 0 && (
        <Ionicons
          name="close-circle"
          size={20}
          color={Colors.textSecondary}
          style={globalStyles.searchClearIcon}
          onPress={() => onChangeText("")}
        />
      )}
    </View>
  );
};