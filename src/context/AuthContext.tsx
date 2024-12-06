// "use client"
// import { AuthRegisterInterface, interfaceGlobalState } from "@/interfaces/authRegister";
// import { createContext, useState } from "react";

// //CONTEXTO, el cual son la estructura en la cual los datos van a navegar.
// export const AuthRegisterContext = createContext<interfaceGlobalState | null>(null);

// //PROOVEDOR, en donde se establecen los estados globales para manejarlos en los componentes hijos(children)
// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [authRegister, setAuthRegister] = useState<AuthRegisterInterface>({
//     name: "",
//     username: "",
//     email: "",
//     age: "",
//     gender: "",
//     tel: "",
//     password: "",
//   });

//   return (
//     <AuthRegisterContext.Provider value={{ authRegister, setAuthRegister }}>
//       {children}
//     </AuthRegisterContext.Provider>
//   )
// }