import React from 'react';
import SlideProducts from './subc/SlideProducts';

export default function Products() {
    return (
        <>
            <section className='bg-BrownS py-10 lg:py-20'>
                <div className='maxW'>
                    <SlideProducts />
                    <div className="flex justify-center mt-6">
                        <img className=" w-[80%] lg:w-[25%]" src="/assest-products.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}