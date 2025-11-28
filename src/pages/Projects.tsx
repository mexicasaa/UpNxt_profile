import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allProjects } from '../data/projects';

// Map of Instagram reel IDs to their embed URLs
const instagramReelUrls: Record<string, string> = {
    // Featured Reels
    'featured-reel-1': 'https://www.instagram.com/reel/DPqft6mAIz1/embed',
    'featured-reel-2': 'https://www.instagram.com/reel/DJllV4bCrNb/embed',
    'featured-reel-3': 'https://www.instagram.com/reel/DPu9jRyCAIP/embed',
    'featured-reel-4': 'https://www.instagram.com/reel/DPOk-SsjA1y/embed',
    'featured-reel-5': 'https://www.instagram.com/reel/DM2NXSss50m/embed',
    'featured-reel-6': 'https://www.instagram.com/reel/DQ3eY7hkur0/embed',
    // Remaining Reels
    'instagram-post-1': 'https://www.instagram.com/p/CUXYfROIhKT/embed',
    'instagram-reel-5': 'https://www.instagram.com/reel/DRemiSvDf4R/embed',
    'instagram-post-2': 'https://www.instagram.com/p/DMSEnfCSC1M/embed',
    'instagram-post-3': 'https://www.instagram.com/p/DJW3lIvz0wW/embed',
    'instagram-reel-6': 'https://www.instagram.com/reel/CvPwMnvtKCO/embed',
    'instagram-reel-7': 'https://www.instagram.com/reel/C5V1XW0LDc8/embed',
    'instagram-reel-feature': 'https://www.instagram.com/reel/DCGzPVLKQLG/embed',
    'instagram-reel-10': 'https://www.instagram.com/reel/DPJWNcygck1/embed',
    'instagram-reel-11': 'https://www.instagram.com/reel/C55o8uFo6Ik/embed'
};

const instagramViewUrls: Record<string, string> = {
    // Featured Reels
    'featured-reel-1': 'https://www.instagram.com/reel/DPqft6mAIz1/',
    'featured-reel-2': 'https://www.instagram.com/reel/DJllV4bCrNb/',
    'featured-reel-3': 'https://www.instagram.com/reel/DPu9jRyCAIP/',
    'featured-reel-4': 'https://www.instagram.com/reel/DPOk-SsjA1y/',
    'featured-reel-5': 'https://www.instagram.com/reel/DM2NXSss50m/',
    'featured-reel-6': 'https://www.instagram.com/reel/DQ3eY7hkur0/',
    // Remaining Reels
    'instagram-post-1': 'https://www.instagram.com/p/CUXYfROIhKT/',
    'instagram-reel-5': 'https://www.instagram.com/reel/DRemiSvDf4R/',
    'instagram-post-2': 'https://www.instagram.com/p/DMSEnfCSC1M/',
    'instagram-post-3': 'https://www.instagram.com/p/DJW3lIvz0wW/',
    'instagram-reel-6': 'https://www.instagram.com/reel/CvPwMnvtKCO/',
    'instagram-reel-7': 'https://www.instagram.com/reel/C5V1XW0LDc8/',
    'instagram-reel-feature': 'https://www.instagram.com/reel/DCGzPVLKQLG/',
    'instagram-reel-10': 'https://www.instagram.com/reel/DPJWNcygck1/',
    'instagram-reel-11': 'https://www.instagram.com/reel/C55o8uFo6Ik/'
};

export function Projects() {
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
                            All <span className="text-accent italic">Projects</span>
                        </h1>
                        <p className="text-secondary/70 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                            Explore our complete portfolio of viral campaigns, editorial shoots, and social media content that defines modern luxury.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allProjects.map((project) => (
                            <div key={project.id} className="group relative">
                                {/* Card Container */}
                                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-accent/30 group-hover:-translate-y-2">

                                    {/* Embed Container */}
                                    <div className="aspect-[4/5] overflow-hidden bg-black flex items-center justify-center relative">
                                        <iframe
                                            src={instagramReelUrls[project.id]}
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            scrolling="no"
                                            allowTransparency={true}
                                            className="w-full h-full relative z-10"
                                            title={project.title}
                                        />

                                        {/* Overlay on Hover */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm pointer-events-none">
                                            <p className="text-accent text-xs uppercase tracking-[0.2em] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                {project.category}
                                            </p>
                                            <h3 className="text-2xl font-serif italic text-white mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                                {project.title}
                                            </h3>
                                            <a
                                                href={instagramViewUrls[project.id]}
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
        </div>
    );
}
