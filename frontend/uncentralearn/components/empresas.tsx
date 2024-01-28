export default function Empresas() {
    return (
        <div className="flex flex-col bg-white h-96 justify-center items-center py-36" id="sponsors">
            <h1 className="text-4xl text-rose-50 justify-center ">Patrocinadores</h1>
            <h3 className="text-2xl text-black justify-center py-16">Empresas que avalan nuestra formación y buscan profesionales</h3>

            <div className="flex flex-row bg-white h-96 justify-center items-center space-x-16">
                <img src="/vottun.png" alt="Logo" className="w-1/4" />
                <img src="/dext.png" alt="Logo" className="w-1/4" />
                <img src="/root.png" alt="Logo" className="w-1/4" />
                <img src="/openai.png" alt="Logo" className="w-1/4" />
            </div>
        </div>
            );
}