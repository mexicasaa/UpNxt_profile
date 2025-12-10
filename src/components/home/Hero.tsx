import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck } from 'lucide-react';

export function Hero() {
    const whatsappLink = "https://wa.me/7428435826";

    return (
        <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center bg-primary pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 aurora-bg">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="text-left space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-md shadow-lg"
                    >
                        <ShieldCheck className="w-4 h-4 text-accent" />
                        <span className="text-xs text-secondary/90 uppercase tracking-[0.2em] font-medium">Dubai's #1 AI System</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight leading-[1.1]"
                    >
                        Automate Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white/50">
                            Leads & Sales.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-secondary/70 font-light leading-relaxed max-w-xl"
                    >
                        The all-in-one AI Growth System for <strong>Immigration, Real Estate, and Medical Clinics</strong> in Dubai. Qualify leads, book appointments, and close deals on WhatsApp—automatically.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-[#128C7E] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transform hover:-translate-y-1"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Get System
                        </a>
                        <a
                            href="#industries"
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold text-white border border-white/10 hover:bg-white/5 transition-colors"
                        >
                            See How It Works
                        </a>
                    </motion.div>

                    <div className="flex items-center gap-4 text-xs text-secondary/40 uppercase tracking-wider font-medium pt-4">
                        <span>• 7-Day Launch</span>
                        <span>• One-Time Setup</span>
                        <span>• Lifetime ROI</span>
                    </div>
                </div>

                {/* Right Content: High-Fidelity Dashboard Mockup of WhatsApp AI */}
                <motion.div
                    initial={{ opacity: 0, rotateX: 20, z: -100 }}
                    animate={{ opacity: 1, rotateX: 0, z: 0 }}
                    transition={{ duration: 1.2, type: "spring" }}
                    className="relative hidden lg:block perspective-1000"
                >
                    <div className="relative z-10 glass-panel rounded-2xl p-6 border border-white/10 bg-black/40 shadow-2xl backdrop-blur-2xl transform rotate-y-[-10deg] hover:rotate-y-[0deg] transition-transform duration-700 ease-out">
                        {/* Mockup Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-xs text-secondary/50 font-mono">system_status: active</div>
                        </div>

                        {/* Mockup Content - Chat Interface */}
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                                    <MessageCircle className="w-4 h-4" />
                                </div>
                                <div className="bg-white/5 p-3 rounded-r-xl rounded-bl-xl text-secondary/90 max-w-[80%]">
                                    <p>New Lead: <strong>Visa Inquiry (Dubai)</strong></p>
                                    <p className="text-xs text-secondary/50 mt-1">Source: WhatsApp • 2 mins ago</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                </div>
                                <div className="bg-accent/10 border border-accent/20 p-3 rounded-r-xl rounded-bl-xl text-accent max-w-[80%]">
                                    <p>AI Agent: Qualified! ✅</p>
                                    <p className="opacity-80 mt-1">"Income verified. Ready to apply. Booking consultation for tomorrow 10 AM."</p>
                                </div>
                            </div>

                            <div className="flex gap-4 opacity-50">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <span className="text-xs">CRM</span>
                                </div>
                                <div className="bg-white/5 p-3 rounded-r-xl rounded-bl-xl text-secondary/90">
                                    <p>Deal Added to Pipeline: 15,000 AED</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Background Glows for Dashboard */}
                    <div className="absolute -inset-4 bg-accent/20 blur-[50px] -z-10 rounded-full opacity-50" />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-secondary/30 to-transparent" />
            </motion.div>
        </section>
    );
}
