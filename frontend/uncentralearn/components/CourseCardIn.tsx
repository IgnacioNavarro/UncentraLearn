'use client';
import TokenLogo from "./tokenlogo";

export default function CourseCardIn(props: { courseName: string, courseAuthor: string, courseRating: string, coursePrice: string, courseImage: string }) {





    return (
        <div className="flex flex-row bg-white h-108 justify-center items-center space-x-4 ">
            <div className="flex flex-col border-solid border-2 border-rose-50">
                <img src={props.courseImage} alt="Logo" className="w-max" />

                <div className="flex flex-row space-x-2 px-2 py-2 items-center">
                    <TokenLogo />
                    <p className="text-2xl text-rose-50 justify-center py-2 pr-6 font-bold">{props.coursePrice}</p>
                </div>
                <div className="flex flex-row space-x-2">
                    <button className="bg-green-50 hover:bg-rose-100 text-white font-bold py-4 px-28">
                        <a href="/course">Añadir al Carrito</a>
                    </button>

                </div>
                <div className="flex flex-row">
                    <button className="bg-rose-50 hover:bg-rose-100 text-white font-bold py-4 px-32">
                        <a href="/course">Comprar Ahora</a>
                    </button>
                </div>

            </div>
        </div>
    );
}