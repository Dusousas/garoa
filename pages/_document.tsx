import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Pré-conexões para otimização de fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <title>Garoa - Produtos de limpeza</title>
        {/* Meta tags essenciais */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* SEO */}
        <meta name="description" content="Produto de limpeza só é bom de verdade quando funciona. E só funciona, de verdade, quando não faz mal a ninguém." />
        <meta name="keywords" content="palavra-chave, site, produtos sustentáveis, exemplo" />
        <meta name="author" content="Nome da sua empresa ou você" />
        {/* Redes Sociais - Open Graph */}
        <meta property="og:title" content="Título do Site" />
        <meta property="og:description" content="Descrição para compartilhamento social." />
        <meta property="og:image" content="https://www.seusite.com.br/imagem.jpg" />
        <meta property="og:url" content="https://www.seusite.com.br" />
        <meta property="og:type" content="website" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Título do Site" />
        <meta name="twitter:description" content="Descrição para Twitter." />
        <meta name="twitter:image" content="https://www.seusite.com.br/imagem.jpg" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
