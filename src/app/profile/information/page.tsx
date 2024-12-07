import Container from "@/components/elements/Container/Container";
import NavTitle from "@/components/elements/headers/NavTitle";
import { IdCard, UserRound, Mail, Phone, Lock, Pencil } from "lucide-react";

export default function information() {
  const data = [
    {
      icon: <IdCard className="size-6" />,
      label: "Nombre de usuario",
      placeholder: "Nombre de usuario",
    },
    {
      icon: <UserRound className="size-6" />,
      label: "Nombre Completo",
      placeholder: "Juan Perez",
    },
    {
      icon: <Mail className="size-6" />,
      label: "Correo Electrónico",
      placeholder: "juanperez@example.com",
    },
    {
      icon: <Phone className="size-6" />,
      label: "Teléfono",
      placeholder: "+549 2256514200",
    },
    {
      icon: <Lock className="size-6" />,
      label: "Contraseña",
      placeholder: "***********",
    },
  ];

  return (
    <Container className="flex flex-col w-full">
      <NavTitle
        link="profile"
        title="Información de Contacto"
        className="absolute top-5 left-1 bg-background"
      />
      <div className="flex flex-col gap-4 w-full px-5 sm:w-3/4 sm:px-0">
        {data.map((item, index) => (
          <div key={index} className="flex gap-2 nth-2:items-end">
            {item.icon}
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-sm text-customWhite">{item.label}</label>
              <input
                type="text"
                placeholder={item.placeholder}
                className="p-3 outline-none focus:border-b focus:border-b-primary w-full bg-transparent"
              />
            </div>
            <div className="flex items-end">
              <Pencil className="size-6" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
