import React from 'react';
import Header from '../../components/header';
import FloatingLogin from '@/components/floatingLogin';
import InterestsForm from '@/components/InterestsForm';
import HeaderLogin from '@/components/header2';
import CourseCard from '@/components/CourseCard';
import CourseCardIn from '@/components/CourseCardIn';


export default function Course() {
    return (
        <div className='bg-white h-screen'>
            <HeaderLogin />

            <div className="flex flex-row bg-white px-10 py-10">
                <div className="flex flex-row bg-rose-50 justify-center items-center rounded-full px-16">
                    <p className="text-2xl text-white justify-center py-8">WEB3</p>
                </div>
            </div>

            <div className="flex flex-row bg-blue-50">
                <div>
                    <div className="flex flex-col">
                        <p className="text-2xl text-black justify-center py-2 px-4 pr-6 font-bold">Curso Fullstack</p>
                        <p className="text-2xl text-black justify-center py-2 px-4 pr-6 underline font-light">Ignacio Navarro</p>

                        <p className='text-2xl text-black justify-center py-2 px-4 pr-6 font-light'>En este curso aprenderás a desarrollar aplicaciones web con las tecnologías más punteras del mercado. Aprenderás a desarrollar aplicaciones web con React, NodeJS, Express y MongoDB. Además, aprenderás a desarrollar Smart Contracts con Solidity y a desplegarlos en la red de Ethereum.</p>

                        <div className="flex flex-row space-x-2 px-4">
                            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">(420)</p>

                        </div>

                    </div>
                </div>
                <div>
                    <CourseCardIn courseName="Curso Fullstack" courseAuthor="Ignacio Navarro" courseRating="240" coursePrice="8" courseImage="/image 5.png" />
                </div>
            </div>

            <div className="flex flex-col bg-white px-10 py-10">
                <p className="text-2xl text-black justify-center py-8 font-bold">PARTNERS</p>
                <img src="/vottun.png" alt="Logo" className="w-44" />
            </div>

            <div className="flex flex-col bg-white px-10 py-10">
                <p className="text-2xl text-black justify-center py-8 font-bold">Descripción</p>
                <p className="text-2xl text-black justify-center py-8">En este curso aprenderás a desarrollar aplicaciones web con las tecnologías más punteras del mercado. Aprenderás a desarrollar aplicaciones web con React, NodeJS, Express y MongoDB. Además, aprenderás a desarrollar Smart Contracts con Solidity y a desplegarlos en la red de Ethereum.</p>
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