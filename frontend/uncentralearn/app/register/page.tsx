import React from 'react';
import Header from '../../components/header';
import FloatingRegister from '@/components/floatingRegister';

export default function Register() {
    return (
        <div className='bg-white h-screen'>
            <Header />
            <FloatingRegister />
        </div>
    );
}