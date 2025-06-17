import React from 'react';
import { GiEcology } from 'react-icons/gi';

export default function About() {
    return (
        <>
            <section id='about' className='py-30'>
                <div className='maxW flex flex-col items-center justify-center lg:flex-row gap-16'>

                    <article className='lg:w-1/2 flex items-center justify-center relative lg:gap-6'>
                        <img className='object-cover w-[50%] border-2 border-GreenP transform -translate-y-10 rounded-[140px] lg:h-[560px] lg:w-[280px]' src="/about-1.jpg" alt="Imagem 1" />

                        <div className='absolute z-10 bg-GreenP flex flex-col justify-center items-center border-white border-4 text-center rounded-full left-1/2 -translate-x-1/2 h-[150px] w-[150px]'>
                            <h1 className='font-bold text-white text-4xl lg:text-6xl'>10+</h1>
                            <p className='text-sm text-white'>Anos de experiência</p>
                        </div>

                        <img className='object-cover w-[50%] border-2 border-GreenP transform translate-y-10 rounded-[140px]  lg:h-[560px] lg:w-[280px]' src="/about-2.jpg" alt="Imagem 2" />
                    </article>

                    <article className='flex items-center flex-col lg:w-1/2 lg:items-start'>
                        <div className='flex gap-4 items-center'>
                            <img className='w-[70px]' src="/icon-about.png" alt="Ícone" />
                            <h2 className='uppercase text-black font-medium tracking-wider text-lg'>Sobre nós</h2>
                        </div>

                        <h1 className='text-4xl font-bold text-GreenP mt-4 text-center lg:text-left'>Protegendo a natureza para um futuro sustentável</h1>
                        <p className='mt-2 text-center lg:text-left'>Produto de limpeza só é bom de verdade quando funciona. E só funciona, de verdade, quando não faz mal a ninguém. Por isso, fizemos a Garoa. Por momentos em paz com sua casa, sua família e a natureza. Os nossos produtos foram desenvolvidos com muito amor e carinho para proteger você, sua família, nossos animais e nosso planeta.</p>
                        <p className='mt-2 text-center lg:text-left'>Por isso, os produtos Garoa são hipoalergênicos, atóxicos, neutros, Baby Frendly (ideais para limpeza do quarto, brinquedos, utensílios, roupas e tudo o mais de seus bebês), Pet Friendly (seu bichinho pode lamber a casa toda sem problemas), biodegradáveis, de base 100% vegetal, não corrosivos, de baixa geração de espuma. Somos filhos da natureza, e das plantas resgatamos sua sabedoria para a formulação de nossos produtos, nos comprometendo a sermos gentis com as pessoas, os animais e com o planeta. </p>
                        <p className='mt-4 font-semibold uppercase text-center lg:text-left'>Com a Garoa é assim, consciência e casa limpa. </p>

                        <article className='flex flex-col gap-x-10 lg:flex-row'>
                            <div className='mt-6 flex items-center gap-2 border border-GreenP/50 py-2 px-4 rounded-xl'>
                                <GiEcology className='text-white text-6xl bg-GreenP p-3 rounded-full' />
                                <h1 className='font-semibold'>Lorem ipsum dolor sit.</h1>
                            </div>

                            <div className='mt-6 flex items-center gap-2 border border-GreenP/50 py-2 px-4 rounded-xl'>
                                <GiEcology className='text-white text-6xl bg-GreenP p-3 rounded-full' />
                                <h1 className='font-semibold'>Lorem ipsum dolor sit.</h1>
                            </div>
                        </article>

                        <div className='mt-6 flex justify-center lg:justify-start'>
                            <a className='bg-GreenP py-3 px-8 font-DM text-md uppercase rounded-xl tracking-wider text-white' href="https://www.lojagaroa.com.br" target='_blank'>Conheça nossa loja</a>
                        </div>

                    </article>

                </div>
            </section>
        </>
    );
}
