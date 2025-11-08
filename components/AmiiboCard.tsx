import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Amiibo } from "../src/domain/models/Amiibo.model";
import { globalStyles } from "../src/presentation/styles/globalStyles";

interface AmiiboCardProps {
  amiibo: Amiibo;
}

export const AmiiboCard: React.FC<AmiiboCardProps> = ({ amiibo }) => {
  const router = useRouter();

  const handlePress = () => {
    const id = `${amiibo.head}-${amiibo.tail}`;
    // Type assertion para evitar error de TypeScript con typed routes
    router.push({
      pathname: "/amiibo/[id]" as any,
      params: { id }
    });
  };

  return (
    <TouchableOpacity
      style={globalStyles.amiiboCard}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: amiibo.image }}
        style={globalStyles.amiiboImage}
        contentFit="contain"
        transition={300}
      />

      <View style={globalStyles.amiiboInfo}>
        <Text style={globalStyles.amiiboName} numberOfLines={1}>
          {amiibo.name}
        </Text>
        <Text style={globalStyles.amiiboCharacter}>
          {amiibo.character}
        </Text>
        <Text style={globalStyles.amiiboSeries} numberOfLines={1}>
          {amiibo.gameSeries}
        </Text>
        <View style={globalStyles.amiiboTypeBadge}>
          <Text style={globalStyles.amiiboTypeText}>{amiibo.type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};