import CourseCard from "./CourseCard";

export default function Tecnologias() {
    return (
        <div className="flex flex-col bg-white p-10">
            <h1 className="text-4xl text-black justify-center">Especializate gracias a nuestros cursos</h1>

            <div className="flex flex-row py-8 space-x-8">
            <CourseCard courseName="Curso Fullstack" courseAuthor="Ignacio Navarro" courseRating="240" coursePrice="8" courseImage="/image 5.png" />
            <CourseCard courseName="Qualcomm Chips" courseAuthor="Alejandro Gracía" courseRating="460" coursePrice="12" courseImage="/image6.png" />
            <CourseCard courseName="Ciberseguridad" courseAuthor="Fernando Rabasco" courseRating="120" coursePrice="6" courseImage="/image7.png" />
            <CourseCard courseName="Frontend" courseAuthor="Rosa Peromingo" courseRating="860" coursePrice="11" courseImage="/image8.png" />
            </div>
        </div>
    );
}