import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaMapLocationDot, FaSquarePhoneFlip } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import Form from './subc/Form';

export default function Contacts() {
    return (
        <>
            <section id='contact' className='py-20'>
                <div className='maxW flex flex-col gap-10 lg:flex-row'>

                    <article className='w-full lg:w-[50%]'>
                        <div className='flex gap-4 items-center'>
                            <img className='w-[70px]' src="/icon-about.png" alt="Ícone" />
                            <h2 className='uppercase text-black font-medium tracking-wider text-lg'>Entre em contato</h2>
                        </div>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aspernatur eveniet facere numquam vero ratione culpa nisi cum quasi repellendus, ab illum exercitationem totam et sit quia omnis minus nihil.</p>
                        <div className='mt-6 flex flex-col gap-2'>
                            <h1 className='flex text-2xl font-medium gap-4 text-GreenP'><FaMapLocationDot className='text-GreenP' />Floripa - SC</h1>
                            <h1 className='flex text-2xl font-medium gap-4 text-GreenP'><MdEmail className='text-GreenP' />garoa@garoa.eco.br</h1>
                            <h1 className='flex text-2xl font-medium gap-4 text-GreenP'><FaSquarePhoneFlip className='text-GreenP' />+55 48 99101-2149</h1>
                        </div>

                        {/* REDES */}
                        <div className='flex mt-4 gap-4'>
                            <a href="https://www.instagram.com/garoa.eco/" target='_blank' rel="noopener noreferrer">
                                <FaInstagramSquare className='text-[#E1306C] text-3xl hover:text-GreenP transition-colors duration-300' />
                            </a>
                            <a href="https://www.facebook.com/garoa.eco" target='_blank' rel="noopener noreferrer">
                                <FaFacebookSquare className='text-[#1877F2] text-3xl hover:text-GreenP transition-colors duration-300' />
                            </a>
                            <a href="https://www.linkedin.com/company/garoaeco" target='_blank' rel="noopener noreferrer">
                                <FaLinkedin className='text-[#0A66C2] text-3xl hover:text-GreenP transition-colors duration-300' />
                            </a>
                        </div>
                    </article>

                    <article>
                        <Form />
                    </article>
                </div>
            </section>
        </>
    );
}