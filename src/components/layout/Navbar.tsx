import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-primary/90 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-serif font-bold tracking-widest text-secondary">
                    mexicasaa
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">

                    <Link to="/projects" className="text-sm uppercase tracking-widest text-secondary/80 hover:text-accent transition-colors">Projects</Link>
                    <Link to="/services" className="text-sm uppercase tracking-widest text-secondary/80 hover:text-accent transition-colors">Services</Link>
                    <Link to="/about" className="text-sm uppercase tracking-widest text-secondary/80 hover:text-accent transition-colors">About Us</Link>

                    <Link to="/contact">
                        <button className="border border-accent text-accent px-6 py-2 text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition-colors">
                            Book Now
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-secondary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-primary border-b border-white/10 p-6 flex flex-col space-y-4">

                    <Link to="/projects" className="text-sm uppercase tracking-widest text-secondary/80 hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
                    <Link to="/services" className="text-sm uppercase tracking-widest text-secondary/80 hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                    <Link to="/about" className="text-sm uppercase tracking-widest text-secondary/80 hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>

                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        <button className="border border-accent text-accent px-6 py-2 text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition-colors w-full">
                            Book Now
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
