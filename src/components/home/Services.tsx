import { Plane, Building2, Stethoscope, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

const industries = [
    {
        icon: <Plane className="w-6 h-6" />,
        title: "Immigration / Visa",

        description: "Stop wasting time on unqualified leads. Our AI qualifies visa applicants instantly on WhatsApp.",
        features: ["Visa Type Qualification", "Document Checklist Auto-Send", "Consultation Booking"],
        colSpan: "lg:col-span-1",
        link: "/immigration-automation"
    },
    {
        icon: <Building2 className="w-6 h-6" />,
        title: "Real Estate",

        description: "Dubai real estate moves fast. Respond to leads in 5 seconds and double your closings.",
        features: ["Instant Property Info", "Viewing Scheduling", "Investor Qualification"],
        colSpan: "lg:col-span-1",
        link: "/realestate-automation"
    },
    {
        icon: <Stethoscope className="w-6 h-6" />,
        title: "Medical Clinics",

        description: "Fill your calendar. Reduce no-shows for Dentists, Derma, and Aesthetic clinics.",
        features: ["Appointment Reminders", "Treatment FAQ Bot", "Post-Care Follow-up"],
        colSpan: "lg:col-span-1",
        link: "/clinic-automation"
    },
    {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "Coaching / Education",

        description: "Sell more courses. Nurture students automatically from inquiry to enrollment.",
        features: ["Course Details Bot", "Student Enrollment Funnel", "Webinar Reminders"],
        colSpan: "lg:col-span-1",
        link: "/training-automation"
    }
];

export function Services() {
    return (
        <section id="industries" className="py-32 bg-primary relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[128px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 max-w-2xl mx-auto text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                        Targeted Solutions
                    </span>
                    <h2 className="text-4xl md:text-6xl font-sans font-bold mb-6 text-white tracking-tight">
                        Choose Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Growth Engine</span>
                    </h2>
                    <p className="text-xl text-secondary/60 font-light leading-relaxed">
                        Specialized AI infrastructure designed for Dubai's highest-value sectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry, index) => (
                        <Link
                            to={industry.link}
                            key={index}
                            className={cn(
                                "group relative p-8 rounded-3xl glass-card overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-transform duration-500",
                                industry.colSpan
                            )}
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-8 flex justify-between items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-lg group-hover:shadow-accent/50">
                                        {industry.icon}
                                    </div>

                                </div>

                                <h3 className="text-2xl font-sans font-bold mb-4 text-white group-hover:text-accent transition-colors">
                                    {industry.title}
                                </h3>

                                <p className="text-secondary/60 font-light text-sm leading-relaxed mb-8">
                                    {industry.description}
                                </p>

                                <div className="mt-auto space-y-4 mb-8">
                                    {industry.features.map((feature, i) => (
                                        <div key={i} className="flex items-start text-sm text-secondary/80 group-hover:text-white transition-colors">
                                            <CheckCircle2 className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <span className="w-full py-4 rounded-xl bg-white/5 hover:bg-white text-center text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 border border-white/5 hover:border-white text-white hover:text-black group-hover:shadow-lg">
                                    Learn More
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* Trust Badge */}
                <div className="mt-20 text-center">
                    <p className="text-secondary/40 text-sm uppercase tracking-widest mb-6">Trusted by businesses in</p>
                    <div className="flex justify-center gap-12 opacity-30 grayscale items-center flex-wrap">
                        <span className="text-2xl font-serif font-bold">Business Bay</span>
                        <span className="text-2xl font-serif font-bold">JLT</span>
                        <span className="text-2xl font-serif font-bold">Downtown Dubai</span>
                        <span className="text-2xl font-serif font-bold">Dubai Marina</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
