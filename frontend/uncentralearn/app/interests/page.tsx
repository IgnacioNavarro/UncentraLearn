import React from 'react';
import Header from '../../components/header';
import InterestsForm from '@/components/InterestsForm';

export default function Interests() {
    return (
        <div className='bg-white h-screen'>
            <Header />
            <InterestsForm />
        </div>
    );
}