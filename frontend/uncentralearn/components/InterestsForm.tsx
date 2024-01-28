import { FormEvent } from "react";

export default function FloatingLogin() {

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/login', {
            method: 'POST',
            body: formData,
        })

        // Handle response if necessary
        const data = await response.json()
        console.log(data)
        //server side redirige a la pagina de seleccion
    }


    return (
        <div className="flex flex-row h-screen bg-white">

            <div className="flex flex-col  items-center w-2/4 px-10 py-40">
                <h2 className="text-4xl text-black">Elige tus áreas de interés</h2>
                <div className="flex flex-col items-center justify-center">
                    <form className="flex flex-col py-20 space-y-2">
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