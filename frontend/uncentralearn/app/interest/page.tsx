import React from 'react';
import Header from '../../components/header';
import FloatingLogin from '@/components/floatingLogin';
import InterestsForm from '@/components/InterestsForm';

export default function Interests() {
    return (
        <div className='bg-white h-screen'>
            <Header />
            <InterestsForm />
        </div>
    );
}