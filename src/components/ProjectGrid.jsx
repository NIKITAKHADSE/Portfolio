import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    { title: "Digivik Business Solution", category: "Corporate Website", color: "linear-gradient(135deg, #1f2937, #111827)", url: "https://digivik.in/" },
    { title: "Her Everyday Runway", category: "Fashion E-Commerce", color: "linear-gradient(135deg, #831843, #4c0519)", url: "https://hereverydayrunway.com/" },
    { title: "Giggles n Scribbles", category: "Kids E-Commerce", color: "linear-gradient(135deg, #0c4a6e, #082f49)", url: "https://gigglesnscribbles.com/" },
    { title: "Concept Tutorials", category: "Education Platform", color: "linear-gradient(135deg, #064e3b, #022c22)", url: "https://concepttutorials.co.in/" },
    { title: "Luxo Nails", category: "Beauty E-Commerce", color: "linear-gradient(135deg, #713f12, #422006)", url: "http://luxonails.in/" },
    { title: "Girja's Salon", category: "Salon Website", color: "linear-gradient(135deg, #831843, #4c0519)", url: "https://girjassalon.com/" }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: index % 2 !== 0 ? '6rem' : '0', // Staggered layout
                textDecoration: 'none',
                cursor: 'pointer',
                group: 'true'
            }}
            className="project-card-wrapper"
        >
            <motion.div
                style={{
                    background: 'rgba(17, 17, 17, 0.4)',
                    border: '1px solid var(--border)',
                    borderRadius: '24px',
                    padding: '24px',
                    backdropFilter: 'blur(10px)',
                    height: '500px',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                whileHover={{
                    borderColor: 'var(--accent)',
                    backgroundColor: 'rgba(17, 17, 17, 0.8)',
                    y: -10
                }}
                transition={{ duration: 0.3 }}
            >
                {/* Visual Placeholder */}
                <div style={{
                    width: '100%',
                    flex: 1,
                    background: project.color,
                    borderRadius: '16px',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <motion.div
                        initial={{ opacity: 0.3, scale: 0.9 }}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                        style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}
                    >
                        Preview
                    </motion.div>
                </div>

                {/* Content */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <div style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%' }}></div>
                            <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>
                                {project.category}
                            </span>
                        </div>
                        <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', margin: 0, fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>
                            {project.title}
                        </h3>
                    </div>

                    <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text)',
                        background: 'var(--surface)'
                    }} className="card-icon">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
            </motion.div>
        </motion.a>
    );
};

const ProjectGrid = () => {
    return (
        <section id="projects" style={{ padding: '8rem 5vw', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1, margin: 0, fontWeight: 300, letterSpacing: '-2px' }}>
                        Selected <br />
                        <span style={{ fontWeight: 700, color: 'var(--accent)' }}>Works.</span>
                    </h2>
                    <p style={{ color: 'var(--text-dim)', maxWidth: '400px', fontSize: '1.1rem', margin: 0, lineHeight: 1.6 }}>
                        Dive into a collection of high-performance e-commerce platforms and modern web applications built for scale and aesthetic excellence.
                    </p>
                </motion.div>

                <div className="project-grid-container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '3rem'
                }}>
                    {projects.map((project, i) => (
                        <ProjectCard key={i} index={i} project={project} />
                    ))}
                </div>

            </div>

            {/* Mobile Overrides */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .project-card-wrapper:hover .card-icon {
                    background: var(--accent) !important;
                    color: var(--bg) !important;
                    border-color: var(--accent) !important;
                }
                @media (max-width: 900px) {
                    .project-grid-container {
                        grid-template-columns: 1fr !important;
                    }
                    .project-card-wrapper {
                        margin-top: 0 !important;
                    }
                }
            `}} />
        </section>
    );
};

export default ProjectGrid;
