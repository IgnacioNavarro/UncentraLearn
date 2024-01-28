import React from 'react';

export default function Landing() {
    return (

        <div className="flex flex-row h-screen bg-white">
            <div className="flex flex-col items-center w-[30vw] px-10 py-40 ml-[10vw]">
                <h2 className="text-4xl text-black">Fórmate con nosotros y entra en una de las mejores empresas del sector</h2>
                <div className="flex flex-row items-center justify-center w-full py-20">
                    <button className="bg-rose-50 hover:bg-rose-100 text-white font-bold py-4 px-28 rounded">
                        <a href="/register">Empieza Hoy</a>
                    </button>
                    </div>
            </div>
            <div className="flex flex-col items-center w-3/5 py-36">
                <img src="/landingphoto.png" alt="Logo" className="w-[70vh]" />
            </div>

        </div>
    );
}