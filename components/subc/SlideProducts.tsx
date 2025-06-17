import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaAngleDoubleLeft } from 'react-icons/fa';

export default function SlideProducts() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const produtos = [
        {
            nome: "Limpa banheiro",
            imagem: "/produtos/limpa-banheiro.png",
            descricao:
                "Sou um produto neutro, suave para as mãos mas forte na limpeza! Minha missão é caprichar no seu banheiro, sendo o único produto na manutenção da limpeza - removendo sujeiras, gorduras e limo. Sou muito eficiente na limpeza do banheiro inteiro - pode testar ;) Você me encontra em embalagens de 600ml.",
            linkCompra: "",
            linkSaibaMais: "",
        },
        {
            nome: "Lava louças",
            imagem: "/produtos/lava-loucas.png",
            descricao:
                "Sou um produto neutro, suave para as mãos. Minha missão é caprichar na sua louça - removendo sujeiras e gorduras sem deixar manchas. Sou de alto rendimento, e faço isso de maneira segura e natural. Você me encontra em embalagens de 600ml e 5 litros.",
            linkCompra: "",
            linkSaibaMais: "",
        },
        {
            nome: "Lava Roupas",
            imagem: "/produtos/lava-roupas.png",
            descricao:
                "Sou um lava roupas que dispensa o uso de amaciante, pode acreditar! Removo manchas e sujeiras difíceis – meus ingredientes não danificam nem endurecem as fibras dos tecidos, e por isso sou ideal para todas as roupas da família inteira. Você me encontra em embalagens de 1litro e 5 litros.",
            linkCompra: "",
            linkSaibaMais: "",
        },
    ];

    return (
        <section className="bg-BrownS">
            <div className="maxW">

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
                    onBeforeInit={(swiper: { params: { navigation: { prevEl: null; nextEl: null; }; }; }) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
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
                                    <div className="flex flex-col gap-y-2 gap-x-6 mt-4">
                                        <a
                                            className="bg-[#47E83E] py-1 px-4 font-DM text-md uppercase tracking-wider text-white"
                                            href={produto.linkCompra}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Comprar agora
                                        </a>
                                        <a
                                            className="bg-GreenP py-1 px-4 font-DM text-md uppercase tracking-wider text-white"
                                            href={produto.linkSaibaMais}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Saiba mais
                                        </a>
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
