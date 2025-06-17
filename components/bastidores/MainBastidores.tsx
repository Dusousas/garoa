import React from 'react';

export default function MainBastidores() {
    return (
        <>
            <article className='lg:w-[60%]'>
                <div className='flex gap-2 items-center justify-center lg:justify-start'>
                    <img className='w-[20px]' src="/favicon.ico" alt="Logo Garoa" />
                    <h2 className='font-DM uppercase text-white font-semibold tracking-wider'>Por Dentro do Nosso Produto</h2>
                </div>
                <h1 className='font-RAJ uppercase text-white font-bold mt-4 text-4xl text-center lg:text-left lg:text-7xl'>Transparência na fórmula, respeito ao meio ambiente e compromisso com você.</h1>

                <div className='flex justify-center gap-4 mt-4 lg:justify-start'>
                    <div>
                        <img className='w-[100px]' src="/icon-01.png" alt="" />
                    </div>
                    <div>
                        <img className='w-[100px]' src="/icon-about.png" alt="Ícone" />
                    </div>
                    <div>
                        <img className='w-[100px]' src="/icon-02.png" alt="" />
                    </div>
                </div>
            </article>
        </>
    );
}