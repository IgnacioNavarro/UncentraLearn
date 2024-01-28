import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import LogoCompleto from "./logoCompleto";
import LogoCompletoWhite from "./logoCompletoWhite";
import LogoWhite from "./logowhite";

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-rose-50">
            <div className="flex flex-row items-center justify-between color-white">
                <div className="px-5 py-2">
                    <Link href="/">
                        <LogoWhite />
                    </Link>
                </div>
            <div className="p-4 space-x-4">
                <Link href="#courses">
                    <span className="text-xl">Cursos</span>
                </Link>
                <Link href="#sponsors">
                    <span className="text-xl">Patrocinadores</span>
                </Link>
                <Link href="#jobs">
                    <span className="text-xl">Empleo</span>
                </Link>
            </div>
            </div>
            <div className="flex items-center justify-end space-x-4 mx-4">

                <input type="text" placeholder="Buscar" className="border-2 border-gray-300 rounded-md p-1" />



                <button className="bg-white hover:bg-rose-50 hover:text-white text-rose-50 py-2 px-4 rounded">

                    <Link href="/login">
                        <span className="text-xl">Iniciar Sesión</span>
                    </Link>
                </button>
                <button className="bg-white hover:bg-rose-50 hover:text-white text-rose-50 py-2 px-4 rounded">
                    <Link href="/register">
                        <span className="text-xl">Registrarse</span>
                    </Link>
                </button>
            </div>
        </header>
    );
}