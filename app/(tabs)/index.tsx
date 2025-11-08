import React from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { AmiiboCard } from "../../components/AmiiboCard";
import { ErrorState } from "../../components/ErrorState";
import { LoadingState } from "../../components/LoadingState";
import { SearchBar } from "../../components/SearchBar";
import { Amiibo } from "../../src/domain/models/Amiibo.model";
import { useAmiibos } from "../../src/presentation/hooks/useAmiibos";
import { globalStyles } from "../../src/presentation/styles/globalStyles";

export default function AmiibosScreen() {
  const { amiibos, loading, error, refresh, searchQuery, filterAmiibos } = useAmiibos();

  if (loading && amiibos.length === 0) {
    return <LoadingState message="Cargando amiibos..." />;
  }

  if (error && amiibos.length === 0) {
    return <ErrorState message={error} />;
  }

  const renderAmiibo = ({ item }: { item: Amiibo }) => (
    <AmiiboCard amiibo={item} />
  );

  return (
    <View style={globalStyles.container}>
      <SearchBar
        value={searchQuery}
        onChangeText={filterAmiibos}
        placeholder="Buscar amiibos..."
      />
      <FlatList
        data={amiibos}
        keyExtractor={(item) => `${item.head}${item.tail}`}
        renderItem={renderAmiibo}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        contentContainerStyle={globalStyles.listContent}
      />
    </View>
  );
}