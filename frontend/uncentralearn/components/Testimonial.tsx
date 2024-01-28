export default function Testimonial() {
    return (
        <div className="flex flex-col bg-white h-96 justify-center items-center">
            <h1 className="text-4xl text-rose-50 justify-center font-bold">Especializate gracias a nuestros cursos</h1>
            <h3 className="text-2xl text-black justify-center py-8">Conviertete en experto gracias a los más de 10.000 cursos</h3>
            <div className="flex flex-row bg-white h-96 justify-center items-center space-x-4">
                <div className="flex flex-row bg-rose-50 justify-center items-center rounded-full px-8">
                    <p className="text-2xl text-white justify-center py-8">WEB3</p>
                </div>
                <div className="flex flex-row bg-rose-50 justify-center items-center rounded-full px-8">
                    <p className="text-2xl text-white justify-center py-8 px-6">FRONTEND</p>
                </div>
                <div className="flex flex-row bg-rose-50 justify-center items-center rounded-full px-16">
                    <p className="text-2xl text-white justify-center py-8">IA</p>
                </div>
                <div className="flex flex-row bg-rose-50 justify-center items-center rounded-full px-8">
                    <p className="text-2xl text-white justify-center py-8">BIG DATA</p>
                </div>
                <div className="flex flex-row bg-rose-50 justify-center items-center rounded-full px-8">
                    <p className="text-2xl text-white justify-center py-8">CIBERSEGURIDAD</p>
                </div>
            </div>
        </div>
            );
}