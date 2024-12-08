export interface UserInterface {
  id: string
  name: string
  username: string
  email: string
  tel: string
  age: string
  gender: string
  role: string
  preferences: string[]
  travelHistory: string[]
  favorites: string[]
  image: string | null
  description: string
  location: string
}

export interface ProfileInterface {
  groupName: '',
  status: '',
  service?: 'alojamiento' | 'transporte' | 'compañero' | 'otro'
}


// Interfaz del contexto completo
export interface ProfileContextInterface {
  dataProfile: ProfileInterface;
  setDataProfile: (data: ProfileInterface) => void
}