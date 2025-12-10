import { Plane, Clock, ArrowRight, AlertTriangle, XCircle } from 'lucide-react';

export function ImmigrationAutomation() {
    return (
        <div className="min-h-screen bg-primary text-secondary font-sans relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 aurora-bg">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 px-6">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
                            <Plane className="w-4 h-4 text-accent" />
                            <span className="text-xs text-accent uppercase tracking-widest font-bold">Immigration & Visa Automation</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Stop Losing Visa Clients <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                                To Slow Replies.
                            </span>
                        </h1>

                        <p className="text-xl text-secondary/70 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                            Every time you miss a call or delay a reply, your competitor gets the client. Our AI qualifies visa leads 24/7, collects documents, and books fees instantly.
                        </p>

                        <a
                            href="https://wa.me/7428435826"
                            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get System
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* The "Pain" Section - Why they lose money */}
            <section className="py-20 px-6 relative z-10 bg-black/40 border-y border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The "Manual Work" Trap</h2>
                        <p className="text-secondary/60">Why traditional agents are losing market share in Dubai.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.05] hover:border-amber-500/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] group hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-full bg-white/[0.05] group-hover:bg-amber-500/20 border border-white/[0.05] group-hover:border-amber-500/30 flex items-center justify-center mb-6 transition-all duration-500">
                                <XCircle className="w-6 h-6 text-white group-hover:text-amber-500 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Unqualified Leads</h3>
                            <p className="text-secondary/60 leading-relaxed group-hover:text-secondary/80 transition-colors">
                                You spend hours talking to people who can't afford a Golden Visa or don't have the salary. <span className="text-amber-400 font-medium block mt-2">Time wasted: 20+ hours/week.</span>
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.05] hover:border-amber-500/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] group hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-full bg-white/[0.05] group-hover:bg-amber-500/20 border border-white/[0.05] group-hover:border-amber-500/30 flex items-center justify-center mb-6 transition-all duration-500">
                                <Clock className="w-6 h-6 text-white group-hover:text-amber-500 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Slow Response</h3>
                            <p className="text-secondary/60 leading-relaxed group-hover:text-secondary/80 transition-colors">
                                Clients message 5 agents at once. If you don't reply in 5 minutes, you lose the deal. <span className="text-amber-400 font-medium block mt-2">Revenue lost: 50,000+ AED/month.</span>
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.05] hover:border-amber-500/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] group hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-full bg-white/[0.05] group-hover:bg-amber-500/20 border border-white/[0.05] group-hover:border-amber-500/30 flex items-center justify-center mb-6 transition-all duration-500">
                                <AlertTriangle className="w-6 h-6 text-white group-hover:text-amber-500 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Document Chaos</h3>
                            <p className="text-secondary/60 leading-relaxed group-hover:text-secondary/80 transition-colors">
                                Chasing clients for passports and photos on WhatsApp manually is messy and unprofessional.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution Section */}
            <section className="py-24 px-6 relative z-10">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">The Mexicassa System</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">A 24/7 Virtual Visa Officer</h2>
                            <p className="text-xl text-secondary/70 font-light mb-8">
                                Imagine having a top-tier agent who never sleeps, never complains, and handles 1,000 leads at once.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/20 transition-colors">
                                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent flex-shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-white">Instant Qualification</h4>
                                        <p className="text-sm text-secondary/60 mt-1">Bot checks salary, nationality, and visa history instantly. Only passes qualified leads to you.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/20 transition-colors">
                                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent flex-shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-white">Auto-Document Collection</h4>
                                        <p className="text-sm text-secondary/60 mt-1">Bot asks for documents one by one and saves them directly to your drive/CRM.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/20 transition-colors">
                                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent flex-shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-white">Appointment Booking</h4>
                                        <p className="text-sm text-secondary/60 mt-1">Qualified leads can book a paid consultation directly on your calendar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-white/10 relative">
                            <div className="absolute -top-6 -right-6 bg-accent text-white px-6 py-3 rounded-xl font-bold shadow-xl shadow-accent/20 animate-bounce">
                                5,000 AED One-Time
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">ROI Calculation</h3>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-secondary/80">Average Visa Profit</span>
                                    <span className="text-white font-bold">5,000 AED</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-secondary/80">Leads Missed / Month</span>
                                    <span className="text-amber-400 font-bold">10 Clients</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-secondary/80">Revenue Lost</span>
                                    <span className="text-amber-500 font-bold">50,000 AED / Month</span>
                                </div>

                                <div className="bg-accent/10 p-6 rounded-xl border border-accent/20 text-center">
                                    <p className="text-sm text-accent mb-2 uppercase tracking-widest font-bold">Your Investment</p>
                                    <p className="text-3xl font-bold text-white">Get System</p>
                                    <p className="text-xs text-secondary/50 mt-2">Pay once. Save 50k/month forever.</p>
                                </div>

                                <a
                                    href="https://wa.me/7428435826"
                                    className="block w-full text-center bg-white text-black py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
                                >
                                    Get System Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
