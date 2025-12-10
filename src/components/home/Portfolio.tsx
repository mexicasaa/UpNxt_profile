import { Link } from 'react-router-dom';
import { ArrowUpRight, Users, Clock, ArrowRight, Zap, CircleDollarSign, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { getFeaturedProjects } from '../../data/projects';

export function Portfolio() {
    // Get only the first 3 projects for the home page showcase
    const caseStudies = getFeaturedProjects().slice(0, 3);

    const getIconForCategory = (category: string) => {
        if (category.includes('Health')) return Users;
        if (category.includes('Finance')) return Shield;
        if (category.includes('Estate')) return Clock;
        if (category.includes('Commerce')) return CircleDollarSign;
        return Zap;
    };

    return (
        <section id="work" className="py-32 bg-primary relative overflow-hidden">
            {/* Ambient Background - Subtle and Professional */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-accent uppercase tracking-widest text-xs font-semibold mb-4 block"
                        >
                            Case Studies
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight"
                        >
                            Proven <span className="text-white">Results</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/projects"
                            className="hidden md:flex items-center gap-2 group text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide"
                        >
                            View All Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {caseStudies.map((study, index) => {
                        const Icon = getIconForCategory(study.category);
                        // Use first result metric if available, else fallback logic could go here
                        const mainResult = study.results?.[0]?.value || "High Impact";
                        const mainMetric = study.results?.[0]?.metric || "Efficiency";

                        return (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative h-[480px] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-500"
                            >
                                {/* Image Background */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={study.image}
                                        alt={study.client || study.title}
                                        className="w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/20" />
                                </div>

                                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                                    {/* Category Badge */}
                                    <div className="absolute top-6 left-6">
                                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/5 rounded-full px-3 py-1.5">
                                            <Icon className="w-3.5 h-3.5 text-accent" />
                                            <span className="text-[11px] font-medium text-white/80 tracking-wider uppercase">{study.category}</span>
                                        </div>
                                    </div>

                                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">{study.client || study.title}</h3>

                                        <div className="flex flex-col mb-6">
                                            <span className="text-5xl font-bold text-white tracking-tighter mb-1">
                                                {mainResult}
                                            </span>
                                            <span className="text-xs text-secondary/60 uppercase tracking-widest font-medium">
                                                {mainMetric}
                                            </span>
                                        </div>

                                        <p className="text-secondary/70 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:text-secondary/90 transition-colors">
                                            {study.description}
                                        </p>

                                        <Link
                                            to={`/projects/${study.id}`}
                                            className="inline-flex items-center gap-2 text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors group/link w-fit"
                                        >
                                            <span className="text-xs font-semibold uppercase tracking-wider">Read Full Case Study</span>
                                            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="mt-12 md:hidden flex justify-center">
                    <Link
                        to="/projects"
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide"
                    >
                        View All Projects
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
