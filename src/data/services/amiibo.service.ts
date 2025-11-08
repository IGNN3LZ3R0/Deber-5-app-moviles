import { apiClient } from "./api.config";
import { 
  AmiiboResponse, 
  Amiibo,
  AmiiboSeries,
  GameSeries,
  Character 
} from "../../domain/models/Amiibo.model";

export class AmiiboService {
  /**
   * Obtener todos los amiibos (con filtros opcionales)
   */
  static async getAmiibos(filters?: {
    name?: string;
    character?: string;
    gameSeries?: string;
    amiiboSeries?: string;
    type?: string;
  }): Promise<Amiibo[]> {
    try {
      const response = await apiClient.get<AmiiboResponse>("/amiibo/", {
        params: filters,
      });
      return response.data.amiibo || [];
    } catch (error) {
      console.error("Error al obtener amiibos:", error);
      throw error;
    }
  }

  /**
   * Obtener un amiibo por su head+tail (ID único)
   */
  static async getAmiiboById(head: string, tail: string): Promise<Amiibo | null> {
    try {
      const response = await apiClient.get<AmiiboResponse>("/amiibo/", {
        params: { head, tail },
      });
      return response.data.amiibo?.[0] || null;
    } catch (error) {
      console.error(`Error al obtener amiibo ${head}${tail}:`, error);
      throw error;
    }
  }

  /**
   * Obtener series de amiibos
   */
  static async getAmiiboSeries(): Promise<AmiiboSeries[]> {
    try {
      const response = await apiClient.get<{ amiiboseries: AmiiboSeries[] }>("/amiiboseries/");
      return response.data.amiiboseries || [];
    } catch (error) {
      console.error("Error al obtener series de amiibos:", error);
      throw error;
    }
  }

  /**
   * Obtener series de juegos
   */
  static async getGameSeries(): Promise<GameSeries[]> {
    try {
      const response = await apiClient.get<{ gameseries: GameSeries[] }>("/gameseries/");
      return response.data.gameseries || [];
    } catch (error) {
      console.error("Error al obtener series de juegos:", error);
      throw error;
    }
  }

  /**
   * Obtener personajes
   */
  static async getCharacters(): Promise<Character[]> {
    try {
      const response = await apiClient.get<{ character: Character[] }>("/character/");
      return response.data.character || [];
    } catch (error) {
      console.error("Error al obtener personajes:", error);
      throw error;
    }
  }
}