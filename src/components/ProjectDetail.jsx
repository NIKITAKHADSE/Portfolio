import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
                minHeight: '100vh',
                padding: '8rem 2rem',
                maxWidth: '1000px',
                margin: '0 auto'
            }}
        >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4rem', color: 'var(--text-secondary)' }}>
                <ArrowLeft size={20} />
                Back to Gallery
            </Link>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    background: 'var(--glass)',
                    borderRadius: '24px',
                    marginBottom: '4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    border: '1px solid var(--border)'
                }}
            >
                Project Hero Image
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
                <div>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Project ID: {id}</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        This is a deep dive into the architecture and design of project {id}.
                        Built with modern frontend technologies, this project showcases advanced
                        state management and complex animation sequences.
                    </p>

                    <h3 style={{ fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>Challenge</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        The main challenge was ensuring high performance while maintaining 60fps
                        for intricate scroll-triggered animations. We achieved this by utilizing
                        GPU-accelerated properties and optimizing the React render cycle.
                    </p>
                </div>

                <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Role</h4>
                    <p style={{ color: 'var(--accent-cyan)', marginBottom: '2rem' }}>Lead Frontend Engineer</p>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Stack</h4>
                    <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                        <li style={{ marginBottom: '0.5rem' }}>• React / Next.js</li>
                        <li style={{ marginBottom: '0.5rem' }}>• Framer Motion</li>
                        <li style={{ marginBottom: '0.5rem' }}>• TypeScript</li>
                        <li style={{ marginBottom: '0.5rem' }}>• Three.js</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
