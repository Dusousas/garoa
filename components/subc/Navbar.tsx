import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    return (
        <>
            {/* Navbar Desktop */}
            <nav className="hidden lg:block">
                <ul className="flex gap-10 items-center text-lg uppercase tracking-widest text-BrownP">
                    <a href="#home"><li>Início</li></a>
                    <a href="#about"><li>Sobre nós</li></a>
                    <a href="/Bastidores"><li>Bastidores</li></a>
                    <a href="#produtos"><li>Produtos</li></a>
                    <a  className="bg-GreenP px-6 text-white py-2" target="_blank" href="https://www.lojagaroa.com.br" >Compre agora</a>
                </ul>
            </nav>

            <div className="lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-3xl text-BrownP focus:outline-none relative z-50"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                <nav
                    className={`fixed top-0 right-0 h-screen w-full bg-white shadow-md z-40 flex flex-col items-center justify-center transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <ul className="flex flex-col items-center gap-8 text-lg uppercase  text-BrownP">
                        <a href="#home" onClick={() => setIsOpen(false)}><li>Início</li></a>
                        <a href="#about" onClick={() => setIsOpen(false)}><li>Sobre nós</li></a>
                        <a href="#bastidores" onClick={() => setIsOpen(false)}><li>Bastidores</li></a>
                        <a href="#produtos" onClick={() => setIsOpen(false)}><li>Produtos</li></a>
                    <a className="bg-GreenP px-6 text-white py-2" target="_blank" href="https://www.lojagaroa.com.br">Compre agora</a>

                    </ul>
                </nav>
            </div>
        </>
    );
}