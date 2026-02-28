import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ padding: '8rem 5vw', maxWidth: '1400px', margin: '0 auto', borderTop: '1px solid var(--border)' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}
            >
                <div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, margin: 0, lineHeight: 1.1 }}>
                        Crafting <br />
                        <span style={{ fontWeight: 700, color: 'var(--accent)' }}>Digital Reality.</span>
                    </h2>
                </div>

                <div style={{ fontSize: '1.2rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
                    <p style={{ marginBottom: '2rem' }}>
                        I'm <strong style={{ color: 'var(--text)' }}>Nikita Khadse</strong>, a passionate Frontend Developer and Web Designer dedicated to building immersive, high-performance web experiences.
                        With a strong background in React, Next.js, and modern CSS, I bridge the gap between aesthetic design and robust engineering.
                    </p>
                    <p>
                        Over the past several years, I've had the opportunity to lead frontend initiatives, notably at <span style={{ color: 'var(--text)', fontWeight: 600 }}>Digivik Business Solution</span>,
                        where I focused on delivering scalable e-commerce platforms and complex, responsive dashboards that elevate the user experience.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
