export interface festivalsInterface {
  id?: string;
  name: string;
  location: string;
  date: string;
  time: string;
  description: string;
  url: string;
  attendeesCount: number;
  imageUrls: string[] | string;
}

// Definición de la interfaz para el contexto
export interface FestivalData {
  festivalId: string;
  chatUserId: string;
}

// Interfaz del contexto completo
export interface FestDataContext {
  festivalData: FestivalData;
  updateFestId: (festId: string) => void;
  updateUserId: (userId: string) => void;
}