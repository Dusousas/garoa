import { GetStaticPaths, GetStaticProps } from 'next';
import produtos from './produtos.json';

export default function Bastidores({ produto }: { produto: any }) {
  if (!produto) return <div>Produto não encontrado</div>;

  return (
    <section className="py-40 bg-BrownS">
      <div className='maxW flex flex-col justify-center items-center h-full relative top-[45px]'>

        <article className='flex flex-col items-center gap-20 w-full lg:flex-row'>

          <div className='flex justify-center lg:justify-end lg:w-[40%]'>
            <img className='w-[70%]' src={produto.imagem} alt="" />
          </div>

          <div className='lg:w-[60%]'>
            <h1 className='font-bold text-2xl uppercase text-center lg:text-left'>{produto.titulo}</h1>
            <h1 className='font-semibold text-GreenP text-xl text-center lg:text-left'>O que eu sou?</h1>
            <p className='mt-4 text-center lg:text-left'>{produto.descricao}</p>
            <ul className="mt-6 list-disc list-inside text-lg text-GreenP font-semibold">
              {produto.caracteristicas.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </article>

        <article className='mt-6'>
          <h1 className='font-bold text-2xl uppercase text-GreenP text-center lg:text-left'>Como me usar:</h1>
          <p className='mt-2 text-center lg:text-left'>{produto.comousar}</p>

          <h1 className='font-bold text-2xl uppercase text-GreenP mt-8 text-center lg:text-left'>Porque sou diferente?</h1>
          <p className='mt-2 text-center lg:text-left'>{produto.diferente}</p>
          <div className='flex mt-10 justify-center lg:justify-start'>
            <img src={produto.imagemdescricao} alt="" />
          </div>
        </article>

      </div>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = produtos.map((produto) => ({
    params: { slug: produto.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const produto = produtos.find((p) => p.slug === params?.slug);
  return { props: { produto } };
};
