import { ArrowLeft, MapPin, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutUs() {
    return (
        <div className="min-h-screen bg-primary text-secondary relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[128px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

            {/* Header */}
            <section className="pt-32 pb-16 relative z-10">
                <div className="container mx-auto px-6">
                    <Link
                        to="/"
                        className="inline-flex items-center space-x-2 text-secondary/60 hover:text-accent transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs uppercase tracking-[0.2em]">Back to Home</span>
                    </Link>

                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
                            About <span className="text-accent italic">UpNxt</span>
                        </h1>
                        <p className="text-secondary/70 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                            We are a premier content creation agency dedicated to elevating brands through authentic, high-impact storytelling.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
                                    alt="On-location shoot"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hidden md:block">
                                <p className="text-accent text-6xl font-serif font-bold mb-2">100+</p>
                                <p className="text-secondary/80 text-sm uppercase tracking-widest">Brands Elevated</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold">
                                Bringing Your Brand to <span className="text-accent italic">Life</span>
                            </h2>
                            <p className="text-secondary/80 text-lg font-light leading-relaxed">
                                At UpNxt, we specialize in a unique on-location service that bridges the gap between your brand and your audience. We don't just create content; we create experiences.
                            </p>
                            <p className="text-secondary/80 text-lg font-light leading-relaxed">
                                Our team of professional creators and models travels directly to your location—whether it's a luxury hotel, a boutique salon, or a corporate headquarters—to capture the essence of your brand in its most authentic environment.
                            </p>
                            <p className="text-secondary/80 text-lg font-light leading-relaxed">
                                By producing high-quality reels and photoshoots on-site, we ensure that every piece of content resonates with your specific aesthetic and drives real engagement, making your brand more popular and recognizable in the digital space.
                            </p>

                            <div className="pt-8">
                                <Link to="/contact">
                                    <button className="bg-accent text-primary px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300">
                                        Work With Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif font-bold">On-Location Service</h3>
                            <p className="text-secondary/70 font-light">
                                We come to you. Our team sets up professional production environments at your specific location to capture authentic brand moments.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif font-bold">Top-Tier Talent</h3>
                            <p className="text-secondary/70 font-light">
                                Access our roster of professional models and creators who know exactly how to embody your brand's voice and style.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif font-bold">Viral Growth</h3>
                            <p className="text-secondary/70 font-light">
                                Our content is strategically designed to perform on social algorithms, increasing your brand's visibility and popularity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
