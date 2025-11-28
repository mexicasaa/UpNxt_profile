import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProjectById } from '../data/projects';

export function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const project = id ? getProjectById(id) : null;

    if (!project || !id) {
        return <Navigate to="/projects" replace />;
    }

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

    const isInstagramReel = id in instagramReelUrls;

    return (
        <div className="min-h-screen bg-primary text-secondary">
            {/* Header */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <Link
                        to="/projects"
                        className="inline-flex items-center space-x-2 text-accent hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm uppercase tracking-widest">Back to Projects</span>
                    </Link>

                    <div className="mt-12">
                        <p className="text-accent text-xs uppercase tracking-widest mb-4">{project.category}</p>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">{project.title}</h1>
                        <p className="text-secondary/80 text-xl font-light max-w-3xl">
                            {project.description}
                        </p>
                    </div>

                    {/* Project Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-white/10 pt-12">
                        {project.client && (
                            <div>
                                <h3 className="text-accent text-xs uppercase tracking-widest mb-2">Client</h3>
                                <p className="text-secondary font-light">{project.client}</p>
                            </div>
                        )}
                        {project.year && (
                            <div>
                                <h3 className="text-accent text-xs uppercase tracking-widest mb-2">Year</h3>
                                <p className="text-secondary font-light">{project.year}</p>
                            </div>
                        )}
                        {project.services && (
                            <div className="col-span-2">
                                <h3 className="text-accent text-xs uppercase tracking-widest mb-2">Services</h3>
                                <p className="text-secondary font-light">{project.services.join(', ')}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Instagram Embed */}
            <section className="py-20 bg-neutral">
                <div className="container mx-auto px-6">
                    {isInstagramReel && (
                        <div className="max-w-md mx-auto">
                            <div className="bg-white rounded-lg overflow-hidden">
                                <iframe
                                    src={instagramReelUrls[id]}
                                    width="100%"
                                    height="700"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowTransparency={true}
                                    className="w-full"
                                    title={project.title}
                                />
                            </div>
                            <div className="mt-6 text-center">
                                <a
                                    href={instagramViewUrls[id]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-accent hover:text-white text-sm uppercase tracking-widest border-b border-accent hover:border-white transition-colors"
                                >
                                    View on Instagram
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
