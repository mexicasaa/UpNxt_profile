import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Zap, BarChart3, Layers } from 'lucide-react';
import { getProjectById } from '../data/projects';
import { motion } from 'framer-motion';

export function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const project = id ? getProjectById(id) : null;

    if (!project || !id) {
        return <Navigate to="/projects" replace />;
    }

    const isDetailedCaseStudy = !!project.problem;

    // Legacy Instagram Logic
    const instagramReelUrls: Record<string, string> = {
        'featured-reel-1': 'https://www.instagram.com/reel/DPqft6mAIz1/embed',
        'featured-reel-2': 'https://www.instagram.com/reel/DJllV4bCrNb/embed',
        'featured-reel-3': 'https://www.instagram.com/reel/DPu9jRyCAIP/embed',
        'featured-reel-4': 'https://www.instagram.com/reel/DPOk-SsjA1y/embed',
        'featured-reel-5': 'https://www.instagram.com/reel/DM2NXSss50m/embed',
        'featured-reel-6': 'https://www.instagram.com/reel/DQ3eY7hkur0/embed',
    };
    const isInstagramReel = id in instagramReelUrls || project.id.startsWith('instagram');

    return (
        <div className="min-h-screen bg-primary text-secondary selection:bg-accent selection:text-white">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-end pb-20 pt-40 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <Link
                        to="/projects"
                        className="inline-flex items-center space-x-2 text-white/60 hover:text-accent transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm uppercase tracking-widest font-medium">Back to Projects</span>
                    </Link>

                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-accent font-semibold backdrop-blur-md">
                                {project.category}
                            </span>
                            {project.year && <span className="text-white/40 text-sm font-light">/ {project.year}</span>}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-sans font-bold text-white mb-8 leading-tight"
                        >
                            {project.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-secondary/80 font-light max-w-2xl leading-relaxed"
                        >
                            {project.description}
                        </motion.p>
                    </div>
                </div>
            </section>

            {isDetailedCaseStudy ? (
                <div className="container mx-auto px-6 py-20">
                    {/* Key Metrics Grid */}
                    {project.results && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                            {project.results.map((result, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <BarChart3 className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{result.value}</h3>
                                    <p className="text-sm uppercase tracking-wider text-secondary/60 font-medium">{result.metric}</p>
                                    <p className="text-xs text-secondary/40 mt-2">{result.label}</p>
                                </motion.div>
                            ))}

                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                        {/* Main Content Info */}
                        <div className="lg:col-span-2 space-y-20">
                            {/* Problem & Solution */}
                            <div className="space-y-12">
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-2 h-8 bg-red-500 rounded-full" />
                                        <h2 className="text-3xl font-bold text-white">The Problem</h2>
                                    </div>
                                    <p className="text-lg text-secondary/70 leading-relaxed pl-5 border-l border-white/5">
                                        {project.problem}
                                    </p>
                                </section>

                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-2 h-8 bg-green-500 rounded-full" />
                                        <h2 className="text-3xl font-bold text-white">The Solution</h2>
                                    </div>
                                    <p className="text-lg text-secondary/70 leading-relaxed pl-5 border-l border-white/5">
                                        {project.solution}
                                    </p>
                                </section>
                            </div>

                            {/* Comparison Image */}
                            {project.caseStudyImages?.comparison && (
                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-8">Verification Data</h2>
                                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                                        <img
                                            src={project.caseStudyImages.comparison}
                                            alt="Before and After Comparison"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <p className="text-center text-sm text-secondary/40 mt-4 italic">
                                        *Data gathered over a 30-day monitoring period post-implementation.
                                    </p>
                                </section>
                            )}

                            {/* Process Steps */}
                            {project.process && (
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-10">How We Built It</h2>
                                    <div className="space-y-8">
                                        {project.process.map((step, idx) => (
                                            <div key={idx} className="flex gap-6 group">
                                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white group-hover:bg-accent group-hover:text-black transition-colors">
                                                    {step.step}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                                    <p className="text-secondary/60 leading-relaxed">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Dashboard Image */}
                            {project.caseStudyImages?.dashboard && (
                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-8">System Interface</h2>
                                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl relative group">
                                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                        <img
                                            src={project.caseStudyImages.dashboard}
                                            alt="System Dashboard"
                                            className="w-full h-auto transform group-hover:scale-[1.01] transition-transform duration-700"
                                        />
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* Sidebar Info */}
                        <div className="space-y-12">
                            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 sticky top-32">
                                <section className="mb-10">
                                    <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                                        <Layers className="w-5 h-5 text-accent" />
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack?.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-secondary/80 font-mono">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </section>

                                <section className="mb-10">
                                    <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-accent" />
                                        Services
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.services?.map((service, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-secondary/70 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-accent/50" />
                                                {service}
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-accent transition-colors">
                                        Start Your Project
                                    </button>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                // Original Layout for Legacy/Simple Projects
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-y border-white/10 py-12">
                        {project.client && (
                            <div>
                                <h3 className="text-accent text-xs uppercase tracking-widest mb-2">Client</h3>
                                <p className="text-secondary font-light">{project.client}</p>
                            </div>
                        )}
                        {project.year && (
                            <div>
                                <h3 className="text-accent text-xs uppercase tracking-widest mb-2">Year</h3>
                                <p className="text-secondary font-light">{project.year}</p>
                            </div>
                        )}
                        {project.services && (
                            <div className="col-span-2">
                                <h3 className="text-accent text-xs uppercase tracking-widest mb-2">Services</h3>
                                <p className="text-secondary font-light">{project.services.join(', ')}</p>
                            </div>
                        )}
                    </div>

                    {isInstagramReel && (
                        <div className="max-w-md mx-auto">
                            <div className="bg-white rounded-lg overflow-hidden relative z-10">
                                <iframe
                                    src={project.id in instagramReelUrls ? instagramReelUrls[project.id] : `https://www.instagram.com/reel/${project.id}/embed`}
                                    width="100%"
                                    height="700"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowTransparency={true}
                                    className="w-full"
                                    title={project.title}
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
