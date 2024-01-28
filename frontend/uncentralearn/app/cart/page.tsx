'use client'
import React from 'react';
import Header from '../../components/header';
import FloatingLogin from '@/components/floatingLogin';
import InterestsForm from '@/components/InterestsForm';
import HeaderLogin from '@/components/header2';
import CourseCard from '@/components/CourseCard';
import CourseCardIn from '@/components/CourseCardIn';
import TokenLogo from '@/components/tokenlogo';
import axios from 'axios';


export default function Course() {

    function pay(){
        console.log("PAYING")
        axios.post('http://localhost:8009/pay', {
        }).then(function (response) {
            console.log(response)
        })
    }


    return (
        <div className='bg-white h-screen'>
            <HeaderLogin />


            <div className="flex flex-row bg-white px-10 py-10">
                <h1 className="text-4xl text-black justify-center py-8 font-bold">Cesta</h1>
            </div>
            <div className="flex flex-row ">
                <img src="/image 5.png" alt="Logo" className="w-[30vw] h-[30vh] ml-[10vw] mt-10" />
                <div className="flex flex-col bg-white px-10 py-10">
                    <p className="text-2xl text-black justify-center py-2 px-4 pr-6 font-bold">Curso Fullstack</p>
                    <p className="text-2xl text-black justify-center py-2 px-4 pr-6 underline font-light">Ignacio Navarro</p>
                </div>
                <div className="flex flex-row space-x-2 px-2 py-2 items-center">
                    <TokenLogo />
                    <p className="text-2xl text-rose-50 justify-center py-2 pr-6 font-bold">8</p>
                </div>

                <div className="flex flex-row bg-white px-10 m-20 h-20">
                <button className="bg-rose-50 hover:bg-rose-100 text-white font-bold py-4 px-32">
                    <a onClick={pay}>Pagar Ahora</a>
                </button>
                </div>

            </div>


            <div className="flex flex-col bg-white px-10 py-10">
                <p className="text-2xl text-black justify-center py-8 font-bold">Cursos relacionados</p>
                <div className="flex flex-row space-x-4">
                    <CourseCard courseName="Curso Fullstack" courseAuthor="Ignacio Navarro" courseRating="240" coursePrice="8" courseImage="/image 5.png" />
                    <CourseCard courseName="Qualcomm Chips" courseAuthor="Alejandro Gracía" courseRating="460" coursePrice="12" courseImage="/image6.png" />
                    <CourseCard courseName="Ciberseguridad" courseAuthor="Fernando Rabasco" courseRating="120" coursePrice="6" courseImage="/image7.png" />
                    <CourseCard courseName="Frontend" courseAuthor="Rosa Peromingo" courseRating="860" coursePrice="11" courseImage="/image8.png" />
                </div>
            </div>
        </div>
    );
}