import React from 'react';
import Header from '../../components/header';
import FloatingLogin from '@/components/floatingLogin';
import InterestsForm from '@/components/InterestsForm';
import HeaderLogin from '@/components/header2';
import CourseCard from '@/components/CourseCard';
import CourseCardIn from '@/components/CourseCardIn';
import TokenLogo from '@/components/tokenlogo';


export default function Course() {
    return (
        <div className='bg-white h-screen'>
            <HeaderLogin />
            <div className="flex flex-row bg-white px-10 py-10">
                <div className="flex flex-col bg-white px-10 py-10">
                    <h1 className="text-4xl text-black justify-center py-8 font-bold">Julia Tomato</h1>
                    <p className="text-2xl text-black justify-center py-8 font-bold">Intereses</p>

                    <div className="flex flex-row bg-white space-x-2">
                    <div className="flex flex-row bg-rose-50 justify-center items-center rounded-full px-8">
                        <p className="text-2xl text-white justify-center py-8">BIG DATA</p>
                    </div>
                    <div className="flex flex-row bg-rose-50 justify-center items-center rounded-full px-8">
                        <p className="text-2xl text-white justify-center py-8">CIBERSEGURIDAD</p>
                    </div>
                    </div>
                </div>

                <div className="flex flex-col bg-white px-10 py-10">
                    <img src="/photo.png" alt="Logo" className="rounded-full" />
                    <TokenLogo />
                    <p className="text-2xl text-rose-50 justify-center py-2 pr-6 font-bold">8</p>
                </div>
            </div>


            <div className="flex flex-col bg-white px-10 py-10">
                <p className="text-2xl text-black justify-center py-8 font-bold">Cursos</p>
                <div className="flex flex-row space-x-4">
                    <CourseCard courseName="Ciberseguridad" courseAuthor="Fernando Rabasco" courseRating="120" coursePrice="6" courseImage="/image7.png" />
                    <CourseCard courseName="Frontend" courseAuthor="Rosa Peromingo" courseRating="860" coursePrice="11" courseImage="/image8.png" />
                </div>
            </div>
        </div>
    );
}