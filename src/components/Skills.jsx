import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "JavaScript (ES6+)", "HTML", "CSS", "Basic SQL"]
    },
    {
        title: "Frameworks & Technologies",
        skills: ["React.js", "Basic PHP", "Django", "MongoDB", "WordPress", "Shopify"]
    },
    {
        title: "Developer Tools",
        skills: ["Git", "GitHub", "VS Code", "Figma", "AWS", "Linux"]
    }
];

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '8rem 0', background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <div style={{ margin: '0 auto', padding: '0 5vw', maxWidth: '1400px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, margin: 0, letterSpacing: '-1px' }}>
                        Technical <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Arsenal.</span>
                    </h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '600px', lineHeight: 1.6 }}>
                        A curated stack of modern web technologies, specialized for building highly scalable interfaces and e-commerce platforms.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '24px'
                    }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                background: 'rgba(17, 17, 17, 0.4)',
                                border: '1px solid var(--border)',
                                borderRadius: '24px',
                                padding: '3rem 2rem',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            whileHover={{ borderColor: 'var(--accent)', backgroundColor: 'rgba(17, 17, 17, 0.8)' }}
                        >
                            <div style={{
                                width: '40px',
                                height: '4px',
                                background: 'var(--accent)',
                                marginBottom: '2rem',
                                borderRadius: '4px'
                            }} />

                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem', marginTop: 0, color: 'var(--text)' }}>
                                {category.title}
                            </h3>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: 'auto' }}>
                                {category.skills.map((skill, sIndex) => (
                                    <span key={sIndex} style={{
                                        padding: '0.6rem 1.2rem',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '100px',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        color: 'var(--text-dim)',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
