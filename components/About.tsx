import React from 'react';

export default function About() {
    return (
        <>
            <section className='py-20'>
                <div className='maxW flex flex-col items-center justify-center lg:flex-row gap-16'>

                    <article className='lg:w-1/2 flex items-center justify-center relative lg:gap-6'>
                        <img className='object-cover w-[50%] border-2 border-GreenP transform -translate-y-10 rounded-[140px] lg:h-[560px] lg:w-[280px]' src="/about-1.jpg"alt="Imagem 1"/>
                        
                        <div className='absolute z-10 bg-GreenP flex flex-col justify-center items-center border-white border-4 text-center rounded-full left-1/2 -translate-x-1/2 h-[150px] w-[150px]'>
                            <h1 className='font-bold text-white text-4xl lg:text-6xl'>10+</h1>
                            <p className='text-sm text-white'>Anos de experiência</p>
                        </div>
                        
                        <img className='object-cover w-[50%] border-2 border-GreenP transform translate-y-10 rounded-[140px]  lg:h-[560px] lg:w-[280px]' src="/about-2.jpg" alt="Imagem 2" />
                    </article>

                    <article className='lg:w-1/2 flex flex-col'>
                        <div className='flex gap-4 items-center'>
                            <img className='w-[70px]' src="/icon-about.png" alt="Ícone" />
                            <h2 className='uppercase text-black font-medium tracking-wider text-lg'>Sobre nós</h2>
                        </div>

                        <h1 className='text-4xl font-bold text-GreenP fon'>Protegendo a natureza para um futuro sustentável</h1>


                    </article>
                </div>
            </section>
        </>
    );
}
