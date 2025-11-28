export interface Project {
    id: string;
    image: string;
    title: string;
    category: string;
    description: string;
    client?: string;
    year?: string;
    services?: string[];
    gallery?: string[];
}

export const allProjects: Project[] = [
    // Featured Reels (Top 6)
    {
        id: "featured-reel-1",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Reel #1",
        category: "Social Media",
        description: "Featured Instagram content",
        client: "Featured Campaign",
        year: "2024",
        services: ["Videography", "Social Media Content"],
        gallery: []
    },
    {
        id: "featured-reel-2",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Reel #2",
        category: "Social Media",
        description: "Featured Instagram content",
        client: "Featured Campaign",
        year: "2024",
        services: ["Videography", "Social Media Content"],
        gallery: []
    },
    {
        id: "featured-reel-3",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Reel #3",
        category: "Social Media",
        description: "Featured Instagram content",
        client: "Featured Campaign",
        year: "2024",
        services: ["Videography", "Social Media Content"],
        gallery: []
    },
    {
        id: "featured-reel-4",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Reel #4",
        category: "Social Media",
        description: "Featured Instagram content",
        client: "Featured Campaign",
        year: "2024",
        services: ["Videography", "Social Media Content"],
        gallery: []
    },
    {
        id: "featured-reel-5",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Reel #5",
        category: "Social Media",
        description: "Featured Instagram content",
        client: "Featured Campaign",
        year: "2024",
        services: ["Videography", "Social Media Content"],
        gallery: []
    },
    {
        id: "featured-reel-6",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Reel #6",
        category: "Social Media",
        description: "Featured Instagram content",
        client: "Featured Campaign",
        year: "2024",
        services: ["Videography", "Social Media Content"],
        gallery: []
    },
    // Remaining Reels
    {
        id: "instagram-post-1",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Post #1",
        category: "Social Media",
        description: "Creative social media content",
        client: "Featured Campaign",
        year: "2024",
        services: ["Photography", "Social Media Content"],
        gallery: []
    },
    {
        id: "instagram-reel-5",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Reel #5",
        category: "Social Media",
        description: "Engaging reel content",
        client: "Featured Campaign",
        year: "2024",
        services: ["Videography", "Social Media Content"],
        gallery: []
    },
    {
        id: "instagram-post-2",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Post #2",
        category: "Social Media",
        description: "High-quality visual content",
        client: "Featured Campaign",
        year: "2024",
        services: ["Photography", "Creative Direction"],
        gallery: []
    },
    {
        id: "instagram-post-3",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Post #3",
        category: "Social Media",
        description: "Premium content marketing",
        client: "Featured Campaign",
        year: "2024",
        services: ["Photography", "Content Creation"],
        gallery: []
    },
    {
        id: "instagram-reel-6",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Reel #6",
        category: "Social Media",
        description: "Dynamic video content",
        client: "Featured Campaign",
        year: "2024",
        services: ["Videography", "Social Media Strategy"],
        gallery: []
    },
    {
        id: "instagram-reel-7",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Reel #7",
        category: "Social Media",
        description: "Trending reel content",
        client: "Featured Campaign",
        year: "2024",
        services: ["Videography", "Creative Direction"],
        gallery: []
    },
    {
        id: "instagram-reel-feature",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Reel Campaign",
        category: "Social Media",
        description: "Viral social media content",
        client: "Featured Campaign",
        year: "2024",
        services: ["Videography", "Social Media Content"],
        gallery: []
    },
    {
        id: "instagram-reel-10",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Reel #10",
        category: "Social Media",
        description: "Creative reel content",
        client: "Featured Campaign",
        year: "2024",
        services: ["Videography", "Social Media Content"],
        gallery: []
    },
    {
        id: "instagram-reel-11",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
        title: "Instagram Reel #11",
        category: "Social Media",
        description: "Engaging social media reel",
        client: "Featured Campaign",
        year: "2024",
        services: ["Videography", "Social Media Content"],
        gallery: []
    }
];

export const getFeaturedProjects = () => allProjects.slice(0, 6);
export const getProjectById = (id: string) => allProjects.find(p => p.id === id);
