import { Phone, Workflow, Rocket, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: <Phone className="w-8 h-8" />,
        title: "Day 1: Discovery",
        description: "We analyze your niche (Visa, Real Estate, Clinic) and map out your perfect lead qualification script."
    },
    {
        icon: <Workflow className="w-8 h-8" />,
        title: "Day 3: The Build",
        description: "We program your AI WhatsApp Bot, set up your CRM pipeline, and integrate your calendar."
    },
    {
        icon: <CheckCircle className="w-8 h-8" />,
        title: "Day 5: Testing",
        description: "We run live tests to ensure the AI handles objections perfectly and books appointments correctly."
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Day 7: Launch",
        description: "We flip the switch. Your system starts qualifying leads and booking sales calls on autopilot."
    }
];

export function Process() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent/5 blur-[128px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
                        Speed to Value
                    </span>
                    <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 text-white">
                        Live in <span className="text-accent stroke-accent">7 Days</span>.
                    </h2>
                    <p className="text-xl text-secondary/70 font-light">
                        No long development cycles. We install our proven infrastructure into your business in one week.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute inset-0 bg-accent/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-full bg-primary border-4 border-primary ring-1 ring-white/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:ring-accent transition-all duration-500 bg-white/5 backdrop-blur-md shadow-xl">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold font-sans mb-4 text-white group-hover:text-accent transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-secondary/60 font-light leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
