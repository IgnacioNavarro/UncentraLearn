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
            <div className="flex flex-col items-center w-2/4 py-36">
                <img src="/loginimg.png" alt="Logo" className="w-4/5" />
            </div>

            <div className="flex flex-col  items-center w-2/4 px-10 py-40">
                <h2 className="text-4xl text-black">Comienza tu registro</h2>
                <div className="flex flex-col items-center justify-center w-full">
                    <form className="flex flex-col items-center justify-center w-full py-20 space-y-4">
                        <input type="text" placeholder="Email" className="border-2 rounded px-4 py-2 w-96 text-gray-800" />
                        <input type="text" placeholder="Contraseña" className="border-2 rounded px-4 py-2 w-96 text-gray-800" />
                        <input type="submit" className="bg-rose-50 hover:bg-rose-100 text-white font-bold py-4 px-28 rounded">
                        </input>
                    </form>
                </div>
            </div>

        </div>
    );
}