export default function Benefits(){
    return(
        <div className="flex flex-row bg-white w-screen justify-center items-center space-x-4">
        <div className="flex flex-col w-50 justify-center items-center">
            <img src="/servicios-profesionales.png" alt="Logo" className="w-max justify-center items-center " />
            <p className="text-2xl text-black justify-center py-2 px-4 pr-6 font-bold w-50">Consige el perfil que buscan las empresas</p>
            <p className="text-2xl text-black justify-center py-2 px-4 pr-6 font-light">La calidad excepcional de los vídeos asegura que no te pierdas ni el más mínimo detalle. Conviertete en el tipo de perfil que buscan las compañias más punteras.</p>
        </div>

        <div className="flex flex-col w-50">
            <img src="/transfer.png" alt="Logo" className="w-max justify-center items-center " />
            <p className="text-2xl text-black justify-center py-2 px-4 pr-6 font-bold w-50">Comparte tus conocimientos</p>
            <p className="text-2xl text-black justify-center py-2 px-4 pr-6 font-light">Haz preguntas, busca opiniones y ofrece soluciones. Comparte tus tu aprendizaje en cursos creados por ti mismo y retroalimenta la comunidad de Uncentralearn.</p>
        </div>

        <div className="flex flex-col w-50">
            <img src="/Profesional.png" alt="Logo" className="w-max justify-center items-center " />
            <p className="text-2xl text-black justify-center py-2 px-4 pr-6 font-bold w-50">Aprende de los líderes en la industria</p>
            <p className="text-2xl text-black justify-center py-2 px-4 pr-6 font-light">Descubre los métodos y técnicas más efectivos al aprender de profesionales destacados en el ámbito tecnológico.</p>
        </div>

        <div className="flex flex-col w-50">
            <img src="/com.png" alt="Logo" className="w-max justify-center items-center " />
            <p className="text-2xl text-black justify-center py-2 px-4 pr-6 font-bold w-50">Conéctate con una comunidad global</p>
            <p className="text-2xl text-black justify-center py-2 px-4 pr-6 font-light">Únete a una comunidad con millones de usuarios de todo el mundo, individuos curiosos y ávidos de explorar y ampliar tus hard skills.</p>
        </div>
    </div>
    );
}