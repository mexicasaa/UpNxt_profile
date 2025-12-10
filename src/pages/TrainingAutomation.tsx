import { GraduationCap, Users, BookOpen, MessageSquare, ArrowRight, AlertOctagon, PhoneMissed } from 'lucide-react';

export function TrainingAutomation() {
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
                            <GraduationCap className="w-4 h-4 text-accent" />
                            <span className="text-xs text-accent uppercase tracking-widest font-bold">Education & Course Automation</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Students Buy From <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                                Who Replies First.
                            </span>
                        </h1>

                        <p className="text-xl text-secondary/70 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                            Students inquiring about courses are messaging 3 other institutes. If you say "I'll call you tomorrow", you've already lost the enrollment.
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

            {/* Pain Grid */}
            <section className="py-20 px-6 relative z-10 bg-black/40 border-y border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">The "Follow-Up" Failure</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-amber-500/40 transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                                    <div className="w-12 h-12 rounded-full bg-white/[0.05] group-hover:bg-amber-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-500">
                                        <PhoneMissed className="w-5 h-5 text-white group-hover:text-amber-500 transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg mb-2">Calls Go Unanswered</h3>
                                        <p className="text-secondary/60 text-sm leading-relaxed group-hover:text-secondary/80 transition-colors">Most students work during the day. They message in the evening. Your sales team is offline. Lead lost.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-amber-500/40 transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                                    <div className="w-12 h-12 rounded-full bg-white/[0.05] group-hover:bg-amber-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-500">
                                        <AlertOctagon className="w-5 h-5 text-white group-hover:text-amber-500 transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg mb-2">Information Overload</h3>
                                        <p className="text-secondary/60 text-sm leading-relaxed group-hover:text-secondary/80 transition-colors">Sending a generic 50-page PDF brochure scares students away. They want instant answers to specific questions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                            <h3 className="text-5xl font-bold text-white mb-2">350%</h3>
                            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-6">Higher Conversion</p>
                            <p className="text-secondary/70">
                                Businesses that reply within 1 minute convert 391% more leads than those who reply after 1 hour.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 relative z-10">
                <div className="container mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">How Mexicassa Automates Enrollment</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="p-8 rounded-2xl glass-card">
                            <BookOpen className="w-10 h-10 text-accent mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Course Info Bot</h3>
                            <p className="text-secondary/60">"How long is the course?" "What is the fee?" Bot answers these instantly using your brochure data, 24/7.</p>
                        </div>
                        <div className="p-8 rounded-2xl glass-card">
                            <Users className="w-10 h-10 text-accent mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Webinar Fillers</h3>
                            <p className="text-secondary/60">Hosting a free masterclass? Bot sends WhatsApp reminders to everyone who registered to ensure full attendance.</p>
                        </div>
                        <div className="p-8 rounded-2xl glass-card">
                            <MessageSquare className="w-10 h-10 text-accent mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Re-engagement</h3>
                            <p className="text-secondary/60">Automatically follow up with students who inquired 3 months ago when a new batch starts ("New Batch Alert!").</p>
                        </div>
                    </div>

                    <div className="mt-20 max-w-2xl mx-auto">
                        <div className="p-1 bg-gradient-to-r from-[#25D366] to-accent rounded-2xl">
                            <div className="bg-primary p-8 rounded-[14px]">
                                <h3 className="text-2xl font-bold text-white mb-2">Fill Your Next Batch.</h3>
                                <p className="text-secondary/60 mb-6">Automate your student enrollment for a one-time setup fee.</p>
                                <a
                                    href="https://wa.me/7428435826"
                                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#25D366] text-white font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all"
                                >
                                    Get System
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
