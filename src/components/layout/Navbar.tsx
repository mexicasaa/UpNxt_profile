import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projects', path: '/projects' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5",
                isScrolled ? "bg-primary/80 backdrop-blur-md py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-sans font-bold tracking-tighter text-white z-50">
                    Mexicassa
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={cn(
                                "text-sm uppercase tracking-widest transition-colors duration-300",
                                location.pathname === link.path ? "text-accent" : "text-secondary/70 hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link to="/contact">
                        <button className="bg-white/5 border border-white/10 text-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-accent hover:border-transparent transition-all duration-300 backdrop-blur-sm">
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-primary/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-2xl font-light text-white hover:text-accent transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        <button className="bg-accent text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-accent/80 transition-colors">
                            Get Started
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
