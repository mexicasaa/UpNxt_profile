import { Check, MessageCircle, Zap } from 'lucide-react';

export function Pricing() {
    const whatsappLink = "https://wa.me/7428435826";

    return (
        <section className="py-32 bg-primary relative">
            <div className="absolute inset-0 bg-accent/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent">
                    <div className="bg-primary/90 rounded-[22px] p-8 md:p-16 text-center backdrop-blur-xl">

                        <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6 border border-accent/20">
                            Limited Time Offer
                        </span>

                        <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6">
                            The 7-Day AI Launch
                        </h2>

                        <div className="flex justify-center items-baseline gap-2 mb-8">
                            <span className="text-6xl md:text-8xl font-bold text-white tracking-tight">5,000</span>
                            <span className="text-2xl text-secondary/60 font-medium">AED</span>
                        </div>

                        <p className="text-xl text-secondary/60 mb-12 max-w-2xl mx-auto font-light">
                            One-time investment. Complete fully automated lead qualification system setup in 7 days.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto mb-16">
                            {[
                                "AI WhatsApp Bot Setup",
                                "Lead Qualification Script",
                                "Calendar & Booking Integration",
                                "Basic CRM Pipeline Setup",
                                "Auto-Follow Up Sequences",
                                "14 Days Support & Training",
                                "Missed Call Text-Back",
                                "Lead Scoring System"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <span className="text-secondary/80 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-12 py-5 rounded-full text-lg uppercase tracking-widest font-bold hover:bg-[#128C7E] transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] transform hover:-translate-y-1 w-full md:w-auto"
                        >
                            <MessageCircle className="w-6 h-6" />
                            Claim Offer on WhatsApp
                        </a>

                        <p className="mt-6 text-sm text-secondary/40">
                            <Zap className="w-3 h-3 inline mr-1" />
                            Fast Turnaround: We start building immediately after confirmation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
