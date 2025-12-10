import { Building2, CheckCircle2, Zap, LayoutDashboard, ArrowRight, TrendingUp, Clock, FileText } from 'lucide-react';

export function RealEstateAutomation() {
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
                            <Building2 className="w-4 h-4 text-accent" />
                            <span className="text-xs text-accent uppercase tracking-widest font-bold">Real Estate Automation</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            The "5-Minute" Rule <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                                Makes or Breaks You.
                            </span>
                        </h1>

                        <p className="text-xl text-secondary/70 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                            Dubai leads have ZERO patience. If you don't send the brochure and floor plan in 5 minutes, they buy from someone else. Our AI does it in 5 seconds.
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

            {/* The "Pain" Section */}
            <section className="py-20 px-6 relative z-10 bg-black/40 border-y border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.05] hover:border-amber-500/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] group hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-full bg-white/[0.05] group-hover:bg-amber-500/20 border border-white/[0.05] group-hover:border-amber-500/30 flex items-center justify-center mb-6 transition-all duration-500">
                                <Clock className="w-6 h-6 text-white group-hover:text-amber-500 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Speed Kill Deals</h3>
                            <p className="text-secondary/60 leading-relaxed group-hover:text-secondary/80 transition-colors">
                                78% of customers buy from the first responder. If you're sleeping or in a meeting, you are physically handing money to competitors.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.05] hover:border-amber-500/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] group hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-full bg-white/[0.05] group-hover:bg-amber-500/20 border border-white/[0.05] group-hover:border-amber-500/30 flex items-center justify-center mb-6 transition-all duration-500">
                                <FileText className="w-6 h-6 text-white group-hover:text-amber-500 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Generic Follow-ups</h3>
                            <p className="text-secondary/60 leading-relaxed group-hover:text-secondary/80 transition-colors">
                                Sending a text "Hi Sir" is useless. Leads want PDFs, layouts, and Payment plans NOW. Manual sending is too slow.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.05] hover:border-amber-500/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] group hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-full bg-white/[0.05] group-hover:bg-amber-500/20 border border-white/[0.05] group-hover:border-amber-500/30 flex items-center justify-center mb-6 transition-all duration-500">
                                <TrendingUp className="w-6 h-6 text-white group-hover:text-amber-500 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">60,000 AED Loss</h3>
                            <p className="text-secondary/60 leading-relaxed group-hover:text-secondary/80 transition-colors">
                                One lost deal covers the cost of this system 12 times over. Can you afford to lose another commission?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 relative z-10">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="glass-panel p-8 rounded-3xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">The "Instant" Agent</h3>
                            </div>
                            <p className="text-secondary/70 mb-6">
                                The moment a lead comes from Property Finder or Bayut, our system triggers.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span>Sends "Hi [Name], here is the brochure" in &lt; 10s</span>
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span>Asks: "Investment or End Use?"</span>
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span>Schedules viewing directly to your calendar</span>
                                </li>
                            </ul>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                                    <LayoutDashboard className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Organized Pipeline</h3>
                            </div>
                            <p className="text-secondary/70 mb-6">
                                Stop using spreadsheets. We give you a visual drag-and-drop pipeline.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span>Visual CRM Setup included</span>
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span>Tags leads: 'Hot', 'Warm', 'Cold' automatically</span>
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span>Reminds YOU if you forget to call a Hot lead</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <h2 className="text-3xl font-bold text-white mb-8">One Closed Deal Pays For This Forever.</h2>
                        <a
                            href="https://wa.me/7428435826"
                            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] transform hover:-translate-y-1"
                        >
                            Start Dominating
                        </a>
                        <p className="mt-4 text-sm text-secondary/40">Includes setup, testing, and 14 days support.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
