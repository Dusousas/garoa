import React from 'react';

export default function PartnerStore() {
    return (
        <>
            <section className='bg-GreenP py-4'>
                <div className='maxW flex flex-col gap-10'>
                    


                    <article className='overflow-hidden'>
                        <div className='flex gap-10 animate-slide'>
                            {Array(2).fill(0).map((_, idx) => (
                                <React.Fragment key={idx}>
                                    <img className='bg-BlueLight p-3 w-[200px]' src="/logoipsum.png" alt="" />
                                    <img className='bg-BlueLight p-3 w-[200px]' src="/logoipsum.png" alt="" />
                                    <img className='bg-BlueLight p-3 w-[200px]' src="/logoipsum.png" alt="" />
                                    <img className='bg-BlueLight p-3 w-[200px]' src="/logoipsum.png" alt="" />
                                    <img className='bg-BlueLight p-3 w-[200px]' src="/logoipsum.png" alt="" />
                                    <img className='bg-BlueLight p-3 w-[200px]' src="/logoipsum.png" alt="" />
                                </React.Fragment>
                            ))}
                        </div>
                    </article>

                </div>
            </section>

            <style jsx>{`
                @keyframes slide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-slide {
                    width: max-content;
                    animation: slide 20s linear infinite;
                }
            `}</style>
        </>
    );
}