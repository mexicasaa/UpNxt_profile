import { Brain, Cpu, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function AboutUs() {
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
                            We Architect <br /> Intelligence.
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed">
                            UpNxt is an elite AI automation firm. We build the neural infrastructure that powers the next generation of industry leaders.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-zinc-900">
                                <img
                                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
                                    alt="AI Visualization"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-white p-8 hidden md:block">
                                <p className="text-black text-6xl font-bold mb-2 tracking-tighter">500+</p>
                                <p className="text-black/60 text-sm uppercase tracking-widest font-medium">Workflows Automated</p>
                            </div>
                        </motion.div>

                        <div className="space-y-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold tracking-tight"
                            >
                                The Future is <span className="text-white/40">Automated.</span>
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="space-y-6 text-lg text-white/60 font-light leading-relaxed"
                            >
                                <p>
                                    We believe that human potential should be unleashed, not bogged down by repetition. Our mission is to integrate autonomous agents into your workforce, handling the redundant so your team can focus on the exceptional.
                                </p>
                                <p>
                                    From predictive analytics to autonomous customer support, we construct bespoke AI systems that don't just optimize your business—they revolutionize it.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="pt-8"
                            >
                                <Link to="/contact" className="inline-flex items-center gap-2 border-b border-white pb-1 hover:text-white/70 transition-colors">
                                    <span className="uppercase tracking-widest text-sm font-medium">Join the Revolution</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 border-t border-white/10 bg-zinc-950">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: <Brain className="w-6 h-6" />, title: "Neural Architecture", desc: "We design AI systems that think, learn, and adapt to your specific business needs." },
                            { icon: <Cpu className="w-6 h-6" />, title: "Precision Engineering", desc: "Production-grade code. Scalable infrastructure. Zero compromise on security." },
                            { icon: <Globe className="w-6 h-6" />, title: "Global Scale", desc: "Solutions built to handle enterprise workloads across borders and time zones." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="w-12 h-12 flex items-center justify-center text-white mb-6 border border-white/20 rounded-full group-hover:border-white transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-white/60 font-light leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
