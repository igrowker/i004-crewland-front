export interface AuthRegisterInterface {
  name: string;
  username: string;
  email: string;
  phoneNumber: number;
  password: string;
}

export interface interfaceGlobalState {
  authRegister: AuthRegisterInterface
  setAuthRegister: (state: AuthRegisterInterface) => void
}