import { Link } from 'react-router-dom';
import { ArrowUpRight, Users, Clock, Shield, Zap, CircleDollarSign, ArrowRight } from 'lucide-react';
import { getFeaturedProjects } from '../data/projects';
import { motion } from 'framer-motion';

export function Projects() {
    const projects = getFeaturedProjects();

    const getIconForCategory = (category: string) => {
        if (category.includes('Health')) return Users;
        if (category.includes('Finance')) return Shield;
        if (category.includes('Estate')) return Clock;
        if (category.includes('Commerce')) return CircleDollarSign;
        return Zap;
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* Header */}
            <section className="pt-32 pb-24 border-b border-white/10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
                            Selected Works.
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed">
                            A curated collection of AI automation systems deployed for high-growth enterprises.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
                        {projects.map((project, idx) => {
                            const Icon = getIconForCategory(project.category);

                            return (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Link to={`/projects/${project.id}`} className="group block">
                                        <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-8 bg-zinc-900">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="px-6 py-3 bg-white text-black rounded-full font-medium text-sm tracking-widest uppercase flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    View Case Study
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                                                    0{idx + 1}
                                                </span>
                                                <div className="flex items-center gap-2 text-xs font-medium text-white/40 uppercase tracking-wider">
                                                    <Icon className="w-3 h-3" />
                                                    {project.category}
                                                </div>
                                            </div>

                                            <h3 className="text-3xl font-bold text-white group-hover:text-white/80 transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-white/60 font-light leading-relaxed line-clamp-2">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {project.results?.slice(0, 2).map((res, i) => (
                                                    <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/80 font-mono">
                                                        {res.value} {res.metric}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
