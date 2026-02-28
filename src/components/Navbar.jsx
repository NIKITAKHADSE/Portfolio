import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '80px',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 5vw',
                    background: 'rgba(3, 3, 3, 0.8)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid var(--border)'
                }}
            >
                <div style={{ width: '100%', maxWidth: '1400px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Link to="/" onClick={closeMenu} style={{ fontWeight: 800, fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 1001 }}>
                        <div style={{ width: '12px', height: '12px', background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent)' }}></div>
                        <span style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>NIKITA.KHADSE</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="desktop-nav" style={{ gap: '3rem', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase' }}>
                        <a href="#about" className="hover:text-accent" style={{ transition: 'color 0.2s' }}>About</a>
                        <a href="#work" className="hover:text-accent" style={{ transition: 'color 0.2s' }}>Work</a>
                        <a href="#skills" className="hover:text-accent" style={{ transition: 'color 0.2s' }}>Skills</a>
                        <a href="#projects" className="hover:text-accent" style={{ transition: 'color 0.2s' }}>Projects</a>
                        <a href="#contact" style={{ color: 'var(--accent)' }}>Contact</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={toggleMenu}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', zIndex: 1001, padding: '0.5rem' }}
                    >
                        <div style={{ width: '24px', height: '2px', background: 'var(--text)', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></div>
                        <div style={{ width: '24px', height: '2px', background: 'var(--text)', opacity: isOpen ? 0 : 1, transition: '0.3s' }}></div>
                        <div style={{ width: '24px', height: '2px', background: 'var(--text)', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <a href="#about" onClick={closeMenu}>About</a>
                        <a href="#work" onClick={closeMenu}>Work</a>
                        <a href="#skills" onClick={closeMenu}>Skills</a>
                        <a href="#projects" onClick={closeMenu}>Projects</a>
                        <a href="#contact" onClick={closeMenu} style={{ color: 'var(--accent)' }}>Contact</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
