import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../../data/projects';
import { ArrowUpRight } from 'lucide-react';

// Map of the 6 featured Instagram reels to their embed URLs
const instagramReelUrls: Record<string, string> = {
    'featured-reel-1': 'https://www.instagram.com/reel/DPqft6mAIz1/embed',
    'featured-reel-2': 'https://www.instagram.com/reel/DJllV4bCrNb/embed',
    'featured-reel-3': 'https://www.instagram.com/reel/DPu9jRyCAIP/embed',
    'featured-reel-4': 'https://www.instagram.com/reel/DPOk-SsjA1y/embed',
    'featured-reel-5': 'https://www.instagram.com/reel/DM2NXSss50m/embed',
    'featured-reel-6': 'https://www.instagram.com/reel/DQ3eY7hkur0/embed'
};

const instagramViewUrls: Record<string, string> = {
    'featured-reel-1': 'https://www.instagram.com/reel/DPqft6mAIz1/',
    'featured-reel-2': 'https://www.instagram.com/reel/DJllV4bCrNb/',
    'featured-reel-3': 'https://www.instagram.com/reel/DPu9jRyCAIP/',
    'featured-reel-4': 'https://www.instagram.com/reel/DPOk-SsjA1y/',
    'featured-reel-5': 'https://www.instagram.com/reel/DM2NXSss50m/',
    'featured-reel-6': 'https://www.instagram.com/reel/DQ3eY7hkur0/'
};

export function Portfolio() {
    const portfolioItems = getFeaturedProjects();

    return (
        <section id="models" className="py-24 bg-primary text-secondary relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                            Featured <span className="text-accent italic">Work</span>
                        </h2>
                        <p className="text-secondary/60 font-light text-lg max-w-md">
                            A curated selection of our most impactful social media campaigns and viral content.
                        </p>
                    </div>
                    <Link
                        to="/projects"
                        className="group flex items-center gap-2 border-b border-accent pb-1 text-sm uppercase tracking-widest hover:text-accent transition-colors mt-8 md:mt-0"
                    >
                        View All Projects
                        <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Grid of 6 Instagram Reels */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item) => (
                        <div key={item.id} className="group relative">
                            {/* Card Container */}
                            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-accent/30 group-hover:-translate-y-2">

                                {/* Embed Container */}
                                <div className="aspect-[4/5] overflow-hidden bg-black flex items-center justify-center relative">
                                    <iframe
                                        src={instagramReelUrls[item.id]}
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        scrolling="no"
                                        allowTransparency={true}
                                        className="w-full h-full relative z-10"
                                        title={item.title}
                                    />

                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm pointer-events-none">
                                        <p className="text-accent text-xs uppercase tracking-[0.2em] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            {item.category}
                                        </p>
                                        <h3 className="text-2xl font-serif italic text-white mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                            {item.title}
                                        </h3>
                                        <a
                                            href={instagramViewUrls[item.id]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150 pointer-events-auto"
                                        >
                                            View on Instagram
                                            <ArrowUpRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
