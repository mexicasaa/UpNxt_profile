import { Stethoscope, CalendarCheck, Clock, MessageCircle, ArrowRight, XCircle, BarChart3, Bell } from 'lucide-react';

export function ClinicAutomation() {
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
                            <Stethoscope className="w-4 h-4 text-accent" />
                            <span className="text-xs text-accent uppercase tracking-widest font-bold">Clinic & Patient Automation</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Your Receptionist is <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                                Costing You Patients.
                            </span>
                        </h1>

                        <p className="text-xl text-secondary/70 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                            Every missed call is a missed patient. Every usage of "I'll call you back" is revenue lost. Our AI books appointments instantly on WhatsApp, 24/7.
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

            {/* Pain Points */}
            <section className="py-20 px-6 relative z-10 bg-black/40 border-y border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The "Empty Chair" Crisis</h2>
                        <p className="text-secondary/60">If your chairs are empty, you are burning money.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.05] hover:border-amber-500/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] group hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-full bg-white/[0.05] group-hover:bg-amber-500/20 border border-white/[0.05] group-hover:border-amber-500/30 flex items-center justify-center mb-6 transition-all duration-500">
                                <XCircle className="w-6 h-6 text-white group-hover:text-amber-500 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">20% No-Show Rate</h3>
                            <p className="text-secondary/60 group-hover:text-secondary/80 transition-colors">Manual confirmations fail. Patients forget. Text reminders get ignored. WhatsApp reminders get read.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.05] hover:border-amber-500/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] group hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-full bg-white/[0.05] group-hover:bg-amber-500/20 border border-white/[0.05] group-hover:border-amber-500/30 flex items-center justify-center mb-6 transition-all duration-500">
                                <Clock className="w-6 h-6 text-white group-hover:text-amber-500 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">After-Hours Loss</h3>
                            <p className="text-secondary/60 group-hover:text-secondary/80 transition-colors">Patients look for doctors at 8 PM - 11 PM. Your clinic is closed. Our Bot is open and booking them.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.05] hover:border-amber-500/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] group hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-full bg-white/[0.05] group-hover:bg-amber-500/20 border border-white/[0.05] group-hover:border-amber-500/30 flex items-center justify-center mb-6 transition-all duration-500">
                                <BarChart3 className="w-6 h-6 text-white group-hover:text-amber-500 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Low Retention</h3>
                            <p className="text-secondary/60 group-hover:text-secondary/80 transition-colors">No one follows up 3 months later for a check-up. You are leaving repeat revenue on the table.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 px-6 relative z-10">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl font-bold text-white leading-tight">Automate The Patient Journey.</h2>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                                    <CalendarCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Instant Booking</h3>
                                    <p className="text-secondary/70 mt-2">Link your calendar. Patients see live slots and book on WhatsApp in 3 clicks.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                                    <Bell className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Smart Reminders</h3>
                                    <p className="text-secondary/70 mt-2">System sends WhatsApp reminders 24h and 2h before. Drastically cuts no-shows.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Review Generation</h3>
                                    <p className="text-secondary/70 mt-2">After appointment, Bot automatically asks for a Google Review. Watch your rating skyrocket.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="glass-panel p-8 rounded-3xl text-center border border-white/10 shadow-2xl">
                                <p className="text-sm uppercase tracking-widest text-secondary/50 mb-4">The Mathematics</p>
                                <h3 className="text-3xl font-bold text-white mb-6">Stop Losing 20k/Month</h3>
                                <p className="text-secondary/70 mb-8">
                                    If you miss just 1 patient a day, that's 15,000 - 30,000 AED loss per month.
                                    <br /><br />
                                    Our system costs 5,000 AED <strong>once</strong>.
                                </p>
                                <a
                                    href="https://wa.me/7428435826"
                                    className="block w-full bg-[#25D366] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all"
                                >
                                    Fix My Clinic
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
