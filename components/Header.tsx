import React, { useState, useEffect } from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Verificar se está no topo da página
            setIsAtTop(currentScrollY <= 50);
            
            if (currentScrollY > lastScrollY) {
                // Scrolling down - esconder header
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up - mostrar header
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <header 
                className={`py-4 fixed z-20 w-full transition-transform duration-300 shadow ${
                    isAtTop ? 'bg-white/80' : 'bg-white'
                } ${
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className='maxW flex justify-between items-center'>
                    
                    <div>
                        <a href="/"><img className='w-[160px]' src="/garoa-logo.png" alt="" /></a>
                    </div>
                    <Navbar />
                </div>
            </header>
        </>
    );
}