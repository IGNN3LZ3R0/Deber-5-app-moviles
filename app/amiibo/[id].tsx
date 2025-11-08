import { ErrorState } from "@/components/ErrorState";
import { LoadingState } from "@/components/LoadingState";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useAmiiboDetail } from "../../src/presentation/hooks/useAmiiboDetail";
import { globalStyles } from "../../src/presentation/styles/globalStyles";

export default function AmiiboDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  if (!id) {
    return <LoadingState message="Cargando detalles..." />;
  }

  // Separar head y tail del identificador (formato: head-tail)
  const parts = (id as string).split('-');
  
  if (parts.length !== 2) {
    return <ErrorState message="ID de amiibo inválido" />;
  }

  const [head, tail] = parts;

  if (!head || !tail) {
    return <ErrorState message="ID de amiibo inválido" />;
  }

  const { amiibo, loading, error } = useAmiiboDetail(head, tail);

  if (loading) {
    return <LoadingState message="Cargando detalles..." />;
  }

  if (error || !amiibo) {
    return <ErrorState message={error || "Amiibo no encontrado"} />;
  }

  return (
    <ScrollView style={globalStyles.detailContainer}>
      <View style={globalStyles.detailHeader}>
        <Image
          source={{ uri: amiibo.image }}
          style={globalStyles.detailImage}
          contentFit="contain"
          transition={300}
        />
        <Text style={globalStyles.detailName}>{amiibo.name}</Text>
        <Text style={globalStyles.detailRace}>{amiibo.character}</Text>
      </View>

      <View style={globalStyles.detailContent}>
        <Text style={globalStyles.sectionTitle}>Información</Text>

        <View style={globalStyles.infoRow}>
          <Text style={globalStyles.infoLabel}>Serie de Juego:</Text>
          <Text style={globalStyles.infoValue}>{amiibo.gameSeries}</Text>
        </View>

        <View style={globalStyles.infoRow}>
          <Text style={globalStyles.infoLabel}>Serie Amiibo:</Text>
          <Text style={globalStyles.infoValue}>{amiibo.amiiboSeries}</Text>
        </View>

        <View style={globalStyles.infoRow}>
          <Text style={globalStyles.infoLabel}>Tipo:</Text>
          <Text style={globalStyles.infoValue}>{amiibo.type}</Text>
        </View>

        <Text style={globalStyles.sectionTitle}>Fechas de Lanzamiento</Text>

        {amiibo.release.na && (
          <View style={globalStyles.infoRow}>
            <Text style={globalStyles.infoLabel}>Norteamérica:</Text>
            <Text style={globalStyles.infoValue}>{amiibo.release.na}</Text>
          </View>
        )}

        {amiibo.release.eu && (
          <View style={globalStyles.infoRow}>
            <Text style={globalStyles.infoLabel}>Europa:</Text>
            <Text style={globalStyles.infoValue}>{amiibo.release.eu}</Text>
          </View>
        )}

        {amiibo.release.jp && (
          <View style={globalStyles.infoRow}>
            <Text style={globalStyles.infoLabel}>Japón:</Text>
            <Text style={globalStyles.infoValue}>{amiibo.release.jp}</Text>
          </View>
        )}

        {amiibo.release.au && (
          <View style={globalStyles.infoRow}>
            <Text style={globalStyles.infoLabel}>Australia:</Text>
            <Text style={globalStyles.infoValue}>{amiibo.release.au}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}