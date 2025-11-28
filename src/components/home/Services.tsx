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

export function Services() {
    return (
        <section id="services" className="py-24 bg-primary text-secondary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[128px] transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-[128px] transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Expertise</h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
                    <p className="text-xl md:text-2xl text-secondary/80 font-light max-w-3xl mx-auto leading-relaxed">
                        We create stunning <span className="text-accent italic">brand reels</span> and <span className="text-accent italic">photoshoots</span> that captivate audiences and define luxury.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-accent group-hover:text-black">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-serif font-semibold mb-4 text-white group-hover:text-accent transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-secondary/70 font-light leading-relaxed group-hover:text-secondary/90 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
