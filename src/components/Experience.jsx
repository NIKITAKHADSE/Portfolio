import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ year, title, company, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            style={{
                background: 'rgba(17, 17, 17, 0.4)',
                border: '1px solid var(--border)',
                padding: '3rem',
                borderRadius: '24px',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                cursor: 'default'
            }}
            whileHover={{
                borderColor: 'var(--accent)',
                backgroundColor: 'rgba(17, 17, 17, 0.8)',
                y: -5
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '2rem', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <span style={{
                    fontWeight: 700,
                    color: 'var(--bg)',
                    background: 'var(--accent)',
                    fontSize: '0.85rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '100px',
                    letterSpacing: '1px'
                }}>{year}</span>

                <span style={{ color: 'var(--text)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1rem' }}>{company}</span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', margin: 0, fontWeight: 500, letterSpacing: '-1px' }}>{title}</h3>

            {Array.isArray(description) ? (
                <ul style={{ color: 'var(--text-dim)', lineHeight: 1.8, fontSize: '1.1rem', margin: 0, marginTop: '1rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {description.map((item, index) => (
                        <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, fontSize: '1.1rem', margin: 0, marginTop: '1rem' }}>{description}</p>
            )}
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="work" style={{ padding: '8rem 5vw', background: 'var(--bg)', position: 'relative', borderTop: '1px solid var(--border)' }}>
            <div className="experience-grid" style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

                <div className="sticky-col" style={{ position: 'sticky', top: '150px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', margin: 0, fontWeight: 300, lineHeight: 1, letterSpacing: '-2px' }}>
                            Career <br />
                            <span style={{ fontWeight: 700, color: 'var(--accent)' }}>Journey.</span>
                        </h2>
                        <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', marginTop: '2rem', maxWidth: '400px', lineHeight: 1.6 }}>
                            A track record of stepping up to complex frontend challenges, architecting scalable UIs, and delivering premium web experiences.
                        </p>
                    </motion.div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <ExperienceItem
                        year="OCT 2023 - PRESENT"
                        title="Frontend Developer"
                        company="Digivik Business Solution"
                        description={[
                            "Developed and launched 4+ responsive, user-focused web applications using React.js, JavaScript, and modern CSS frameworks, improving UI/UX satisfaction by 80%.",
                            "Implemented cross-browser compatibility and optimized mobile responsiveness, enhancing accessibility and engagement by 70%.",
                            "Collaborated with designers and backend developers to deliver high-quality, maintainable frontend solutions within deadlines and budget.",
                            "Engineered reusable and scalable React components to ensure performance efficiency and maintainability, achieving page load speeds under 2 seconds.",
                            "Deployed production-ready web applications with optimized bundle sizes, resulting in faster performance and improved user retention."
                        ]}
                    />

                    <ExperienceItem
                        year="APR 2023 - SEP 2023"
                        title="Full Stack Developer (Intern)"
                        company="Codelevate Technologies"
                        description={[
                            <span key="1">Undergoing comprehensive training in <strong style={{ color: 'var(--text)' }}>HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, and MongoDB</strong>.</span>,
                            <span key="2">Gaining hands-on experience in <strong style={{ color: 'var(--text)' }}>full-stack development</strong> through real-world projects aligned with company requirements.</span>,
                            "Developing practical industry skills and insights to build scalable web applications."
                        ]}
                    />
                </div>
            </div>

            {/* Mobile Layout Fix */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 900px) {
                    .experience-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .experience-grid .sticky-col {
                        position: relative !important;
                        top: 0 !important;
                        margin-bottom: 2rem;
                    }
                }
            `}} />
        </section>
    );
};

export default Experience;
