import React, { useState, useEffect, JSX } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    // Função para navegar entre páginas e seções
    const handleNavigation = (path: string, section?: string | null): void => {
        setIsOpen(false); // Fecha o menu mobile
        
        // Se estamos indo para uma página diferente
        if (path && path !== window.location.pathname) {
            if (section) {
                // Salva a seção no sessionStorage para navegar após o carregamento
                sessionStorage.setItem('scrollToSection', section);
            }
            window.location.href = path;
        } 
        // Se estamos na mesma página, apenas faz scroll
        else if (section) {
            scrollToSection(section);
        }
    };

    // Função para fazer scroll suave para a seção
    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Verifica se há uma seção para navegar após o carregamento da página
    useEffect(() => {
        const sectionToScroll: string | null = sessionStorage.getItem('scrollToSection');
        if (sectionToScroll) {
            sessionStorage.removeItem('scrollToSection');
            // Aguarda um pouco para a página carregar completamente
            setTimeout(() => {
                scrollToSection(sectionToScroll);
            }, 100);
        }
    }, []);

    return (
        <>
            {/* Navbar Desktop */}
            <nav className="hidden lg:block">
                <ul className="flex gap-6 items-center text-lg uppercase tracking-widest text-BrownP">
                    <li>
                        <button 
                            onClick={() => handleNavigation('/', 'home')}
                            className="hover:opacity-70 transition-opacity uppercase cursor-pointer"
                            type="button"
                        >
                            Início
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => handleNavigation('/', 'about')}
                            className="hover:opacity-70 transition-opacity uppercase cursor-pointer"
                            type="button"
                        >
                            Sobre nós
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => handleNavigation('/Bastidores')}
                            className="hover:opacity-70 transition-opacity uppercase cursor-pointer"
                            type="button"
                        >
                            Bastidores
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => handleNavigation('/', 'products')}
                            className="hover:opacity-70 transition-opacity uppercase cursor-pointer"
                            type="button"
                        >
                            Produtos
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => handleNavigation('/', 'contact')}
                            className="hover:opacity-70 transition-opacity uppercase cursor-pointer"
                            type="button"
                        >
                            Contato
                        </button>
                    </li>

                    <a 
                        className="bg-[#47E83E] px-6 text-white py-2 hover:bg-[#3fd636] transition-colors" 
                        target="_blank" 
                        href="https://www.lojagaroa.com.br"
                        rel="noopener noreferrer"
                    >
                        Compre agora
                    </a>
                </ul>
            </nav>

            {/* Menu Mobile */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-3xl text-BrownP focus:outline-none relative z-50"
                    type="button"
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                <nav
                    className={`fixed top-0 right-0 h-screen w-full bg-white shadow-md z-40 flex flex-col items-center justify-center transition-transform duration-300 ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <ul className="flex flex-col items-center gap-8 text-lg text-BrownP">
                        <li className="">
                            <button 
                                onClick={() => handleNavigation('/', 'home')}
                                className="hover:opacity-70 transition-opacity uppercase cursor-pointer"
                                type="button"
                            >
                                Início
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleNavigation('/', 'about')}
                                className="hover:opacity-70 transition-opacity uppercase cursor-pointer"
                                type="button"
                            >
                                Sobre nós
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleNavigation('/Bastidores')}
                                className="hover:opacity-70 transition-opacity uppercase cursor-pointer"
                                type="button"
                            >
                                Bastidores
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleNavigation('/', 'products')}
                                className="hover:opacity-70 transition-opacity uppercase cursor-pointer"
                                type="button"
                            >
                                Produtos
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleNavigation('/', 'contact')}
                                className="hover:opacity-70 transition-opacity uppercase cursor-pointer"
                                type="button"
                            >
                                Contato
                            </button>
                        </li>

                        <a 
                            className="bg-[#47E83E] px-6 text-white py-2 hover:bg-[#3fd636] transition-colors" 
                            target="_blank" 
                            href="https://www.lojagaroa.com.br"
                            rel="noopener noreferrer"
                        >
                            Compre agora
                        </a>
                    </ul>
                </nav>
            </div>
        </>
    );
}