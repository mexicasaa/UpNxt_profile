import { Video, Camera, Users, Sparkles } from 'lucide-react';

const services = [
    {
        icon: <Video className="w-8 h-8" />,
        title: "Brand Reels",
        description: "Cinematic vertical video content designed for viral impact on Instagram and TikTok."
    },
    {
        icon: <Camera className="w-8 h-8" />,
        title: "Editorial Photoshoots",
        description: "High-fashion campaign imagery for luxury brands, hotels, and lifestyle products."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Model Casting",
        description: "Curated selection of professional talent matching your brand's unique aesthetic."
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Creative Strategy",
        description: "Comprehensive visual direction and influencer partnerships to amplify your presence."
    }
];

export function ServicesPage() {
    return (
        <div className="min-h-screen bg-primary text-secondary relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[128px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

            {/* Header */}
            <section className="pt-32 pb-16 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
                            Our <span className="text-accent italic">Expertise</span>
                        </h1>
                        <p className="text-secondary/70 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                            We create stunning brand reels and photoshoots that captivate audiences and define luxury.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative p-12 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-accent group-hover:text-black">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-3xl font-serif font-semibold mb-6 text-white group-hover:text-accent transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-secondary/70 text-lg font-light leading-relaxed group-hover:text-secondary/90 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
