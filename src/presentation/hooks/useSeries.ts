import { useEffect, useState } from "react";
import { AmiiboService } from "../../data/services/amiibo.service";
import { GameSeries } from "../../domain/models/Amiibo.model";

export const useSeries = () => {
    const [series, setSeries] = useState<GameSeries[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchSeries = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await AmiiboService.getGameSeries();
            setSeries(data);
        } catch (err) {
            setError("Error al cargar las series de juegos. Intenta nuevamente.");
            console.error("Error fetching series:", err);
        } finally {
            setLoading(false);
        }
    };

    const refresh = async () => {
        await fetchSeries();
    };

    useEffect(() => {
        fetchSeries();
    }, []);

    return {
        series,
        loading,
        error,
        refresh
    };
};