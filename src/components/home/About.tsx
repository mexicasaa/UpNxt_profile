
export function About() {
    return (
        <section id="agency" className="py-24 bg-primary text-secondary overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Grid */}
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
                            alt="Fashion Shoot"
                            className="w-full h-64 object-cover mt-12"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop"
                            alt="Model Portrait"
                            className="w-full h-64 object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                            Redefining <span className="text-accent italic">Excellence</span> in Modeling
                        </h2>
                        <p className="text-secondary/80 text-lg font-light leading-relaxed mb-6">
                            We are more than just an agency; we are visual storytellers. We partner with the world's most prestigious brands to create captivating imagery that resonates with audiences.
                        </p>
                        <p className="text-secondary/80 text-lg font-light leading-relaxed mb-8">
                            From high-fashion runways to digital-first social campaigns, our diverse roster of talent brings your creative vision to life with professionalism and grace.
                        </p>

                        <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                            <div>
                                <h3 className="text-3xl font-serif text-accent">50+</h3>
                                <p className="text-xs uppercase tracking-widest text-secondary/60 mt-2">Reels and Photo Shoot</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif text-accent">20+</h3>
                                <p className="text-xs uppercase tracking-widest text-secondary/60 mt-2">Brands</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif text-accent">100%</h3>
                                <p className="text-xs uppercase tracking-widest text-secondary/60 mt-2">Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
