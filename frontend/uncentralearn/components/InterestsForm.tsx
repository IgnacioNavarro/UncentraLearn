'use client';
import { FormEvent } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation'
export default function FloatingLogin() {

    const router = useRouter()    


    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const emailuser = localStorage.getItem("email")
        //OBTAIN WALLET
        axios.post('http://localhost:8009/wallet', {
            email: emailuser,
        }).then(function (response) {
            console.log(response)
            const wallet = response.data.message.accountAddress;
            const strategy = response.data.message.strategy;
            console.log(wallet)
            localStorage.setItem("wallet", wallet);
            localStorage.setItem("strategy", strategy);
            console.log("Exit")
            router.push('http://localhost:3000/home')
        })
        .catch(function (error) {
            console.log("Exit with error")
            console.log(error);
        })
    }


    return (
        <div className="flex flex-row h-[75vh] bg-white">
            <div className="flex flex-col  items-center w-2/4 px-10 py-40">
                <h2 className="text-4xl text-black">Elige tus áreas de interés</h2>
                <div className="flex flex-col items-center justify-center">
                    <form className="flex flex-col py-20 space-y-2" onSubmit={onSubmit}>
                        <div className="flex flex-row border-2">
                            <input type="checkbox" className="border-2 rounded py-2 text-gray-800" value={"WEB3"} />
                            <label className="text-gray-800 px-2">WEB3</label>
                        </div>
                        <div className="flex flex-row border-2">
                            <input type="checkbox" className="border-2 rounded py-2  text-gray-800" value={"WEB3"} />
                            <label className="text-gray-800 px-2">FRONTEND</label>
                        </div>
                        <div className="flex flex-row border-2">
                            <input type="checkbox" className="border-2 rounded py-2  text-gray-800" value={"WEB3"} />
                            <label className="text-gray-800 px-2">IA</label>
                        </div>
                        <div className="flex flex-row border-2">
                            <input type="checkbox" className="border-2 rounded py-2  text-gray-800" value={"WEB3"} />
                            <label className="text-gray-800 px-2">BIG DATA</label>
                        </div>
                        <div className="flex flex-row border-2">
                            <input type="checkbox" className="border-2 rounded py-2  text-gray-800" value={"WEB3"} />
                            <label className="text-gray-800 px-2">CIBERSEGURIDAD</label>
                        </div>
                        <input type="submit" className="bg-rose-50 hover:bg-rose-100 text-white font-bold py-4 px-28 rounded">
                        </input>
                    </form>
                </div>
            </div>

            <div className="flex flex-col items-center w-2/4 py-36">
                <img src="/interestsimg.png" alt="Logo" className="w-4/5" />
            </div>

        </div>
    );
}