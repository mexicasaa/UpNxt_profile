
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2574&auto=format&fit=crop"
                    alt="Fashion Model"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-accent uppercase tracking-[0.3em] text-sm mb-4"
                >
                    Premier Model Management
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-secondary mb-8 leading-tight"
                >
                    ELEVATE YOUR <br /> <span className="italic text-accent">BRAND</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-secondary/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
                >
                    Connecting world-class talent with luxury hotels, salons, and lifestyle brands for impactful social campaigns.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link to="/projects">
                        <button className="bg-accent text-primary px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300">
                            View Projects
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
