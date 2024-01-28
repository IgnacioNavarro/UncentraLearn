import React from 'react';
import Header from '../../components/header';
import FloatingLogin from '@/components/floatingLogin';

export default function Login() {
    return (
        <div className='bg-white h-screen'>
            <Header />
            <FloatingLogin />
        </div>
    );
}