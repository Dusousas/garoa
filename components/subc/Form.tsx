import React from 'react';

export default function Form() {
    return (
        <>
            <form action="" className='bg-gray-100 px-10 py-20 border-l-3 border-BrownP flex flex-col gap-4'>
                <div className='flex gap-4 w-full'>
                    <input className='bg-[#FAFAFA] text-black outline-0 py-4 px-4 w-full' placeholder='Primeiro Nome' type="text" />
                    <input className='bg-[#FAFAFA] text-black outline-0 py-4 px-4 w-full' placeholder='Sobrenome' type="text" />
                </div>
                <input className='bg-[#FAFAFA] text-black outline-0 py-4 px-4 w-full' placeholder='Seu E-mail' type="text" />
                <textarea className='bg-[#FAFAFA] text-black outline-0 py-4 px-4 w-full resize-none' placeholder='Sua mensagem' rows={4} name="" id=""></textarea>
                <div>
                    <button className='bg-GreenP cursor-pointer py-3 px-8 font-DM text-md uppercase tracking-wider text-white border-2 border-GreenP hover:bg-transparent hover:text-GreenP transition duration-300 ease-in-out'>Enviar</button>
                </div>
            </form>
        </>
    );
}