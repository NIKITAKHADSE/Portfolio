import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.2 }
        }
    };

    const item = {
        hidden: { y: "100%", opacity: 0, rotate: 15, scale: 0.8 },
        show: {
            y: "0%",
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: { type: "spring", damping: 20, stiffness: 100 }
        }
    };

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 5vw',
            position: 'relative',
            maxWidth: '1400px',
            margin: '0 auto'
        }}>
            {/* Background ambient glow */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '5%',
                width: '40vw',
                height: '40vw',
                borderRadius: '50%',
                background: 'radial-gradient(circle, var(--accent) 0%, transparent 60%)',
                filter: 'blur(100px)',
                opacity: 0.05,
                zIndex: -1
            }} />

            <motion.div variants={container} initial="hidden" animate="show" style={{ zIndex: 1, marginTop: '5vh' }}>
                <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                    <div style={{ width: '40px', height: '2px', background: 'var(--accent)' }}></div>
                    <span style={{ color: 'var(--text-dim)', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        Hi, I'm Nikita Khadse
                    </span>
                </motion.div>
                <div style={{ overflow: 'hidden', display: 'flex' }}>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 10vw, 8rem)', lineHeight: 0.85, margin: 0, fontWeight: 700, letterSpacing: '-0.05em' }}>
                        {"FRONTEND".split("").map((char, index) => <motion.span key={index} variants={item} style={{ display: 'inline-block' }}>{char}</motion.span>)}
                    </h1>
                </div>
                <div style={{ overflow: 'hidden', display: 'flex' }}>
                    <h1 className="title-outline" style={{ fontSize: 'clamp(1.8rem, 9vw, 8rem)', lineHeight: 0.85, margin: 0, fontWeight: 700, letterSpacing: '-0.05em' }}>
                        {"DEVELOPER &".split("").map((char, index) => <motion.span key={index} variants={item} style={{ display: 'inline-block', whiteSpace: 'break-spaces' }}>{char}</motion.span>)}
                    </h1>
                </div>
                <div style={{ overflow: 'hidden', display: 'flex' }}>
                    <h1 style={{ fontSize: 'clamp(1.6rem, 9vw, 8rem)', lineHeight: 0.85, margin: 0, fontWeight: 700, letterSpacing: '-0.05em' }}>
                        {"WEB DESIGNER".split("").map((char, index) => <motion.span key={index} variants={item} style={{ display: 'inline-block', whiteSpace: 'break-spaces' }}>{char}</motion.span>)}
                    </h1>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}
            >
                <button className="pill-button" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                    View Projects
                </button>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ width: '12px', height: '12px', background: 'var(--accent)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px var(--accent)' }}></span>
                        <span style={{ color: 'var(--text)', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Available for Work</span>
                    </div>
                    <p style={{ color: 'var(--text-dim)', maxWidth: '500px', fontSize: '1.1rem', margin: 0, lineHeight: 1.5 }}>
                        Crafting high-performance e-commerce platforms and immersive web experiences from concept to scale.
                    </p>
                </div>
            </motion.div>
        </section >
    );
};

export default Hero;
