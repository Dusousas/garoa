import React, { JSX } from 'react';
import { motion } from 'framer-motion';

export default function InfoBastidores(): JSX.Element {
    // Variantes de animação para elementos vindos da esquerda
    const slideInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    // Variantes de animação para elementos vindos da direita
    const slideInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    return (
        <section className='bg-BrownS py-20 overflow-x-0'>
            <div className='maxW flex flex-col gap-20'>

                <motion.article 
                    className='w-full lg:w-[60%] self-start border-l-4 border-GreenP pl-6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInLeft}
                >
                    <h1 className='text-4xl text-BrownP uppercase tracking-widest font-semibold'>Ingredientes</h1>
                    <p className='mt-2 text-lg'>
                        Somos transparentes, e por isso nossos ingredientes são todos abertos, em português, e explicamos direitinho a função de cada um deles!
                        Entenda um pouco mais sobre os ingredientes que somos feitos.
                    </p>
                    <img className='mt-4' src="/ingredientes.png" alt="Ingredientes" />
                </motion.article>

                <motion.article 
                    className='w-full lg:w-[60%] self-end border-r-4 border-GreenP pr-6 text-right'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInRight}
                >
                    <h1 className='text-4xl text-BrownP uppercase tracking-widest font-semibold'>Princípio Ativo</h1>
                    <p className='mt-2 text-lg'>
                        Os Terpenos são ativos contidos nas plantas, que possuem várias funções na Natureza, dentre elas as de desengordurar, ação microbiana (contra fungos, germes e bactérias) e de eliminação de odores.
                        Através dos óleos essenciais das plantas, os Terpenos são retirados da natureza, mas neste processo acabam perdendo a maior parte de sua eficácia. Assim, o uso de óleos essenciais por si só não conseguem promover a eficiência necessária aos produtos de limpeza.
                        Os produtos Garoa utilizam da tecnologia dos Terpenos Modificados, desenvolvida e aprimorada por mais de 10 anos em laboratório, que através de processos naturais recuperam grande parte da ação que os Terpenos tinham na Natureza, possibilitando então o desenvolvimento de produtos naturais com grande eficiência.
                    </p>
                    <img className='mt-4 w-full ml-auto' src="/Tabela-Principio.png" alt="Princípio Ativo" />
                </motion.article>

                <motion.article 
                    className='w-full lg:w-[60%] self-start border-l-4 border-GreenP pl-6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInLeft}
                >
                    <h1 className='text-4xl text-BrownP uppercase tracking-widest font-semibold'>Tensoativos</h1>
                    <p className='mt-2 text-lg'>
                        Nos produtos de limpeza Garoa, os tensoativos são responsáveis por promover a solubilização dos terpenos na água (homogeneizar o produto), bem como potencializar suas funções.
                        A escolha dos tensoativos é ponto chave na criação de produtos naturais de limpeza. Nós optamos por tensoativos de origem vegetal, biodegradáveis e de baixa geração de espuma.
                        A escolha por tensoativos biodegradáveis é de grande importância, pois os tensoativos inadequados geram sérios problemas ambientais. Infelizmente a legislação brasileira está desatualizada, e a ANVISA só permite que se coloque nos rótulos a informação Tensoativo Biodegradável (nunca Produto Biodegradável) para produtos que contenham tensoativos aniônicos.
                        A Garoa utiliza de todos os tipos de tensoativos (aniônicos, catiônicos, não iônicos e anfóteros), e para isso fomos buscar na Comissão Europeia (ec.europa.eu) a Listagem de Ingredientes para Detergentes (DID-List), em que se pode fundamentar tecnicamente as informações a respeito da biodegradabilidade e toxicidade dos tensoativos.
                        Assim, conseguimos eleger, dentre os tensoativos disponíveis no Brasil provenientes de fontes vegetais, aqueles que possuem alto grau de biodegradabilidade e baixo grau de toxicidade, para podermos oferecer produtos eficientes e que respeitem as pessoas, os animais e o planeta.
                    </p>
                    <img className='mt-4' src="/tenso-ativo.png" alt="Ingredientes" />
                </motion.article>

                <motion.article 
                    className='w-full lg:w-[60%] self-end border-r-4 border-GreenP pr-6 text-right'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInRight}
                >
                    <h1 className='text-4xl text-BrownP uppercase tracking-widest font-semibold'>COADJUVANTES</h1>
                    <p className='mt-2 text-lg'>
                        Os coadjuvantes são os demais ingredientes utilizados na formulação dos produtos, com finalidades específicas para cada caso</p>
                    <img className='mt-4 ml-auto' src="/coadjuvantes.png" alt="Princípio Ativo" />
                </motion.article>

            </div>
        </section>
    );
}