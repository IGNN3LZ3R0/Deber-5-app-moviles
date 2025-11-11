// app/(tabs)/series.tsx
import React from "react";
import { ActivityIndicator, FlatList, RefreshControl, Text, TouchableOpacity, View } from "react-native";
import { useSeries } from "../../src/presentation/hooks/useSeries";
import { Colors, globalStyles } from "../../src/presentation/styles/globalStyles";

export default function SeriesScreen() {
    const { series, loading, error, refresh } = useSeries();

    if (loading && series.length === 0) {
        return (
            <View style={[globalStyles.container, { justifyContent: "center", alignItems: "center" }]}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        );
    }

    if (error && series.length === 0) {
        return (
            <View style={[globalStyles.container, { justifyContent: "center", alignItems: "center" }]}>
                <Text style={{ color: Colors.error }}>{error}</Text>
            </View>
        );
    }

    const renderSeries = ({ item }: { item: { key: string; name: string } }) => (
        <TouchableOpacity style={globalStyles.amiiboCard}>
            <View style={globalStyles.amiiboInfo}>
                <Text style={globalStyles.amiiboName}>{item.name}</Text>
                <Text style={globalStyles.amiiboCharacter}>{item.key}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={series}
                keyExtractor={(item) => item.key}
                renderItem={renderSeries}
                refreshControl={<RefreshControl refreshing={loading} onRefresh={refresh} />}
                contentContainerStyle={globalStyles.listContent}
            />
        </View>
    );
}