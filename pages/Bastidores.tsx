import InfoBastidores from '@/components/bastidores/InfoBastidores';
import MainBastidores from '@/components/bastidores/MainBastidores';
import React from 'react';

export default function Bastidores() {
    return (
        <>
            <section className='relative bgServices h-[80vh] bg-BrownS'>
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className='maxW relative top-[45px] flex  items-center h-full z-10'>
                    <MainBastidores />
                </div>

            </section>
                    <InfoBastidores />

        </>
    );
}