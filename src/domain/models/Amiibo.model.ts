export interface Amiibo {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;      // Identificador único (primeros 8 dígitos)
  tail: string;      // Identificador de variante
  image: string;
  name: string;
  type: string;      // Figure, Card, Yarn, etc.
  release: {
    au: string | null;
    eu: string | null;
    na: string | null;
    jp: string | null;
  };
}

export interface AmiiboResponse {
  amiibo: Amiibo[];
}

export interface AmiiboSeries {
  key: string;
  name: string;
}

export interface GameSeries {
  key: string;
  name: string;
}

export interface Character {
  key: string;
  name: string;
}