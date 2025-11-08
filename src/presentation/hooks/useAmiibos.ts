import { useEffect, useState } from "react";
import { AmiiboService } from "../../data/services/amiibo.service";
import { Amiibo } from "../../domain/models/Amiibo.model";

export const useAmiibos = () => {
  const [amiibos, setAmiibos] = useState<Amiibo[]>([]);
  const [filteredAmiibos, setFilteredAmiibos] = useState<Amiibo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchAmiibos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await AmiiboService.getAmiibos();
      setAmiibos(data);
      setFilteredAmiibos(data);
    } catch (err) {
      setError("Error al cargar amiibos. Intenta nuevamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filterAmiibos = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredAmiibos(amiibos);
      return;
    }

    const filtered = amiibos.filter((amiibo) =>
      amiibo.name.toLowerCase().includes(query.toLowerCase()) ||
      amiibo.character.toLowerCase().includes(query.toLowerCase()) ||
      amiibo.gameSeries.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAmiibos(filtered);
  };

  const refresh = () => {
    fetchAmiibos();
  };

  useEffect(() => {
    fetchAmiibos();
  }, []);

  return {
    amiibos: filteredAmiibos,
    loading,
    error,
    refresh,
    searchQuery,
    filterAmiibos,
  };
};