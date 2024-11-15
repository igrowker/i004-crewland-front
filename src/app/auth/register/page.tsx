import ReusableInput from "@/components/ReusableInput";

export default function Register() {
  return (
    <section className="bg-background min-h-screen">
      <div className="flex gap-5 p-4">
        <span className="w-6 h-6 bg-slate-100/50 block rounded-full"></span>
        <h1 className="font-title font-medium text-xl text-customWhite">
          Crear un nuevo Usuario
        </h1>
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
