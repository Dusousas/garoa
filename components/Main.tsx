import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

export default function Main() {
    return (
        <>
            <section id='home' className='bgMain relative h-screen'>
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className='maxW relative top-[45px] flex items-center h-full z-10'>

                    <article className='lg:w-[60%]'>
                        <div className='flex gap-2 items-center justify-center lg:justify-start'>
                            <img className='w-[20px]' src="/favicon.ico" alt="Logo Garoa" />
                            <h2 className='font-DM uppercase text-white font-semibold tracking-wider'>Bem-vindo à Garoa</h2>
                        </div>
                        <h1 className='font-RAJ uppercase text-white font-bold mt-4 text-4xl text-center lg:text-left lg:text-7xl'>A garoa protege você, sua família e o planeta.</h1>
                        <p className='mt-2 text-white text-center lg:text-left'>Somos sonhadores. Inquietos, determinados em resgatar a conexão dos seres humanos com a natureza.</p>
                        <div className='mt-6 flex justify-center lg:justify-start'>
                            <a className='bg-GreenP py-3 px-8 font-DM text-md uppercase tracking-wider text-white border-2 border-GreenP hover:bg-transparent hover:border-white transition duration-300 ease-in-out'href="https://www.lojagaroa.com.br" target='_blank'>
                                Ir para a loja sustentável
                            </a>
                        </div>

                    </article>
                </div>
                <div className='absolute flex flex-row gap-4 right-4 bottom-4 lg:flex-col'>
                    <a href="https://www.instagram.com/garoa.eco/" target='_blank'><FaInstagramSquare className='text-white text-2xl hover:text-GreenP' /></a>
                    <a href="" target='_blank'><FaFacebookSquare className='text-white text-2xl hover:text-GreenP' /></a>
                    <a href="" target='_blank'><FaLinkedin className='text-white text-2xl hover:text-GreenP' /></a>
                </div>
            </section>
        </>
    );
}
