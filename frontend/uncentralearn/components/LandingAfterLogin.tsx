import React from 'react';

export default function LandingLogin() {
    return (

        <div className="flex flex-row h-screen bg-white">
            <div className="flex flex-col  items-center w-2/5 px-10 py-40">
                <h2 className="text-4xl text-black">Formate de la mano de grandes expertos</h2>
                <p className="text-2xl text-black py-8">Toma las riendas de tu carrera profesional. Aprende las habilidades más actuales sobre desarrollo web.</p>
            </div>
            <div className="flex flex-col items-center w-3/5 py-36">
                <img src="/imgLandLogin.png" alt="Logo" className="w-4/5" />
            </div>

        </div>
    );
}