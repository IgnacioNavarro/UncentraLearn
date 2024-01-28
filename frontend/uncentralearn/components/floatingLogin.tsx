'use client';
import { FormEvent } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation'


export default function FloatingLogin() {

    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //hacer peticion on submit a la api de login puerto 8009
    function login(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("hola");
        console.log(email);
        axios.post('http://localhost:8009/login', {
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);
                router.push('http://localhost:3000/home')

            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <div className="flex flex-row h-screen bg-white">
            <div className="flex flex-col items-center w-2/4 py-36">
                <img src="/loginimg.png" alt="Logo" className="w-4/5" />
            </div>

            <div className="flex flex-col  items-center w-2/4 px-10 py-40">
                <h2 className="text-4xl text-black">Inicia sesión</h2>
                <div className="flex flex-col items-center justify-center w-full">
                    <form className="flex flex-col items-center justify-center w-full py-20 space-y-4" onSubmit={login}>
                        <input type="text" placeholder="Email" className="border-2 rounded px-4 py-2 w-96 text-gray-800" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <input type="password" placeholder="Contraseña" className="border-2 rounded px-4 py-2 w-96 text-gray-800" onChange={(e) => setPassword(e.target.value)}  value={password} />
                        <input type="submit" value="Submit" className="bg-rose-50 hover:bg-rose-100 text-white font-bold py-4 px-28 rounded">
                        </input>
                    </form>
                </div>
            </div>

        </div>
    );
}