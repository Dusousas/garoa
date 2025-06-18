import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import type { Swiper as SwiperClass } from 'swiper';

export default function SlideProducts() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const produtos = [
        {
            nome: "Limpa banheiro",
            slug: "limpa-banheiro",
            imagem: "/produtos/limpa-banheiro.png",
            descricao:
                "Sou um produto neutro, suave para as mãos mas forte na limpeza! Minha missão é caprichar no seu banheiro, sendo o único produto na manutenção da limpeza - removendo sujeiras, gorduras e limo. Você me encontra em embalagens de 600ml.",
            comprarLink: "https://site.com/produto/limpa-banheiro",
            saibaMaisLink: "/limpa-banheiro"
        },
        {
            nome: "Lava louças",
            slug: "lava-louças",
            imagem: "/produtos/lava-loucas.png",
            descricao:
                "Sou um produto neutro, suave para as mãos. Minha missão é caprichar na sua louça - removendo sujeiras e gorduras sem deixar manchas. Sou de alto rendimento. Você me encontra em embalagens de 600ml e 5 litros.",
            comprarLink: "https://site.com/produto/lava-loucas",
            saibaMaisLink: "/lava-louças"
        },
        {
            nome: "Lava Roupas",
            slug: "lava-roupas",
            imagem: "/produtos/lava-roupas.png",
            descricao:
                "Sou um lava roupas que dispensa o uso de amaciante! Removo manchas difíceis, e sou ideal para todas as roupas. Você me encontra em embalagens de 1 litro e 5 litros.",
            comprarLink: "https://site.com/produto/lava-roupas",
            saibaMaisLink: "/lava-roupas"
        },
    ];

    return (
        <section className="bg-BrownS">
            <div className="maxW">

                {/* Setas personalizadas */}
                <div className="flex justify-center gap-6 mb-6">
                    <button ref={prevRef}>
                        <FaAngleDoubleLeft className="text-GreenP text-3xl cursor-pointer" />
                    </button>
                    <button ref={nextRef}>
                        <FaAngleDoubleLeft className="text-GreenP text-3xl rotate-180 cursor-pointer" />
                    </button>
                </div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper: SwiperClass) => {
                        // Garantir que o Swiper reconheça os botões
                        // após refs estarem disponíveis
                        if (
                            typeof swiper.params.navigation !== 'boolean' &&
                            swiper.params.navigation
                        ) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                    }}
                >
                    {produtos.map((produto, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center gap-4 w-full">
                                <img className="w-[40%] lg:w-[30%]" src={produto.imagem} alt={produto.nome} />
                                <div>
                                    <h1 className="font-bold text-2xl uppercase lg:text-3xl">{produto.nome}</h1>
                                    <p className="mt-2 text-sm lg:text-md">{produto.descricao}</p>
                                    <div className="flex flex-col gap-y-2 gap-x-6 mt-4 lg:flex-row">
                                        <a className="bg-[#47E83E] py-1 px-4 font-DM text-md uppercase tracking-wider text-white border-2 border-[#47E83E] hover:bg-transparent hover:text-[#47E83E] transition duration-300 ease-in-out" href={produto.comprarLink} target="_blank" rel="noopener noreferrer">Comprar agora</a>
                                        <a className="bg-GreenP py-1 px-4 font-DM text-md uppercase tracking-wider text-white border-2 border-GreenP hover:bg-transparent hover:text-GreenP transition duration-300 ease-in-out"href={produto.saibaMaisLink}>Saiba mais</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}
