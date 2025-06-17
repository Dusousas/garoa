import React from 'react';

export default function Main() {
    return (
        <>
            <section className='bgMain relative  h-screen'>
                <div className="absolute inset-0 bg-black/40 z-0"></div>
                <div className='maxW relative top-[45px] flex items-center h-full z-10'>

                    <article className='lg:w-[60%]'>
                        <div className='flex gap-2 items-center justify-center lg:justify-start'>
                            <img className='w-[20px]' src="/favicon.ico" alt="Logo Garoa" />
                            <h2 className='font-DM uppercase text-white font-semibold tracking-wider'>Bem-vindo à Garoa</h2>
                        </div>
                        <h1 className='font-RAJ uppercase text-white font-bold mt-4 text-4xl text-center lg:text-left lg:text-7xl'>A garoa protege você, sua família e o planeta.</h1>
                        <p className='mt-2 text-white text-center lg:text-left'>Somos sonhadores. Inquietos, determinados em resgatar a conexão dos seres humanos com a natureza.</p>
                        <div className='mt-6 flex justify-center lg:justify-start'>
                            <a className='bg-GreenP py-3 px-8 font-DM text-md uppercase tracking-wider text-white' href="https://www.lojagaroa.com.br" target='_blank'>Ir para a loja sustentável</a>
                        </div>

                    </article>
                </div>
            </section>
        </>
    );
}
