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
  isActive: boolean; 
  type: 'transport' | 'accommodation' | 'crew' 
  participants: { name: string }[]; 
  festival: {
    name: string; 
    location: string; 
    date: string; 
  };
  publications: any[];
  festivals: Record<string, any>;
  
}


export interface ProfileContextInterface {
  dataProfile: ProfileInterface;
  setDataProfile: (data: ProfileInterface) => void
}