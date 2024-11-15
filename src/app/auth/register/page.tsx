import ReusableInput from "@/components/elements/Inputs/ReusableInput";
import Title from "@/components/elements/Titles/Title";

export default function Register() {
  return (
    <section className="bg-background min-h-screen">
      <div className="flex gap-5 p-4">
        <span className="w-6 h-6 bg-slate-100/50 block rounded-full"></span>
        <Title 
          text="Crear un nuevo Usuario"
          size="large"
          weight="bold"
          className="tracking-[.09em] font-title text-xl"
        />
      </div>
      <form className="flex flex-col mx-4 py-4 gap-6">
        <ReusableInput
          label="Nombre completo"
          placeholder="Juan Perez"
        />
        <ReusableInput
          label="Nombre de usuario"
          placeholder="Juan-Perez24"
        />
        <ReusableInput
          type="email"
          label="Correo Electronico"
          placeholder="juanperez@gmail.com"
        />
        <ReusableInput
          type="number"
          label="Numero de Telefono"
          placeholder="+51 123 456 789"
        />
        <ReusableInput
          type="password"
          label="Contrasena"
          password={true}
          placeholder="******************"
        />
        <ReusableInput
          type="password"
          label="Repite tu Contrasena"
          password={true}
          placeholder="******************"
        />
        <button type="submit" className="text-center bg-primary text-background rounded-lg py-3 font-bold">
          Siguiente
        </button>
      </form>
    </section>
  )
}
