import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className='bg-[#66CCCC] py-6'>
                <div className='maxW flex flex-col items-center justify-center'>            
                        <a className='cursor-pointer' href="/"><img className='w-[160px]' src="/logo-footer.png" alt="" /></a>
                    <p className='text-black mt-4'>Todos os direitos reservados</p>
                </div>
            </footer>
        </>
    );
}