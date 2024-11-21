export interface AuthRegisterInterface {
  name: string;
  username: string;
  email: string;
  tel: string;
  age: string;
  gender: string;
  password: string;
}

export interface interfaceGlobalState {
  authRegister: AuthRegisterInterface
  setAuthRegister: (state: AuthRegisterInterface) => void
}