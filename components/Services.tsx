import React from 'react';

export default function Services() {
    return (
        <>
            <section id='services' className='py-20 bgServices relative'>
                <div className="absolute inset-0 bg-black/40 z-0"></div>

                <div className='maxW relative z-10'>
                    <article className='flex items-center flex-col lg:w-1/2 lg:items-start'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-[70px]' src="/icon-services.png" alt="Ícone" />
                            <h2 className='uppercase text-white font-semibold tracking-wider text-lg'>Nosso Jeito de Fazer</h2>
                        </div>

                        <h1 className='text-4xl font-bold text-GreenP mt-4 text-center  lg:text-left'>Bastidores mostra um pouco do que SOMOS feitos.</h1>
                        <p className='mt-4 text-lg text-white text-center lg:text-left'>Somos transparentes, e por isso nossos ingredientes são todos abertos, em português, e explicamos direitinho a função de cada um deles!
                            Entenda um pouco mais sobre os ingredientes que somos feitos</p>
                        <div className='mt-6 flex justify-center lg:justify-start'>
                            <a className='bg-GreenP py-3 px-8 font-DM text-md uppercase rounded-xl tracking-wider text-white' href="/bastidores" target='_blank'>Saiba mais</a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}