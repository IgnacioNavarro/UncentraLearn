import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import LogoCompleto from "./logoCompleto";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4">
        <div className="flex items-center justify-between">
            <Link href="/">
                <LogoCompleto/>
            </Link>
        </div>
        <div className="flex items-center justify-between">
            <Link href="/courses">
                <span className="text-xl">Cursos</span>
            </Link>
            <Link href="/sponsors">
                <span className="text-xl">Patrocinadores</span>
            </Link>
            <Link href="/jobs">
                <span className="text-xl">Empleo</span>
            </Link>

        </div>
        <div className="flex items-center justify-between">

            <input type="text" placeholder="Buscar" className="border-2 border-gray-300 rounded-md p-1"/>
            

            <button className="bg-white hover:bg-blue-700 text- font-bold py-2 px-4 rounded">

            <Link href="/login">
                <span className="text-xl font-bold">Iniciar Sesión</span>
            </Link>
            </button>
            <Link href="/register">
                <span className="text-xl font-bold">Registrarse</span>
            </Link>
        </div>
        </header>
    );
    }