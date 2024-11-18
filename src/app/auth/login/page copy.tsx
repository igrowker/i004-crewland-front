import Image from "next/image";
import Link from "next/link";
export default function Login() {

  const  handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

  }
  return (
    <div>
      <div className="flex flex-row gap-3">
        <h1>CREWLAND</h1>
        <Image
          className="white"
          src="/crewland_logo.svg"
          alt="Next.js logo"
          width={30}
          height={30}
        />
      </div>
  
      <form onSubmit={handleLoginSubmit}  className="flex flex-col">
      <div className="flex flex-col">
          <input type="text" id="username" name="username" placeholder="Correo electrónico" />
        </div>
        <div className="flex flex-col">
          <input type="password" id="password" name="password" placeholder="Contraseña" />
        </div>

        <div className="flex flex-col">
          <button type="submit">Iniciar Sesión</button>
          <button type="submit">Registrarse</button>
        </div>
      </form>
      <div className="flex flex-col items-center">
      <Link href="" className="text-customWhite hover:text-primary">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </div>
  );
}
