import { useEffect, useState } from "react";
import { AmiiboService } from "../../data/services/amiibo.service";
import { Amiibo } from "../../domain/models/Amiibo.model";

export const useAmiiboDetail = (head: string, tail: string) => {
  const [amiibo, setAmiibo] = useState<Amiibo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAmiiboData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await AmiiboService.getAmiiboById(head, tail);
        setAmiibo(data);
      } catch (err) {
        setError("Error al cargar detalles del amiibo.");
        console.error("Error crítico:", err);
      } finally {
        setLoading(false);
      }
    };

    if (head && tail) {
      fetchAmiiboData();
    }
  }, [head, tail]);

  return { amiibo, loading, error };
};