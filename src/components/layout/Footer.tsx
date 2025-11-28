
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer id="contact" className="bg-primary text-secondary border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="text-2xl font-serif font-bold tracking-widest text-secondary block mb-6">
                            mexicasaa<span className="text-accent">.</span>
                        </a>
                        <p className="text-secondary/60 font-light text-sm leading-relaxed">
                            Premier model management agency connecting exceptional talent with global brands.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {['Agency', 'Models', 'Services', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-secondary/70 hover:text-white text-sm transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3 text-secondary/70 text-sm">
                                <MapPin className="w-4 h-4 text-accent" />
                                <span>221B Baker Street, London NW1 6XE, UK</span>
                            </li>
                            <li className="flex items-center space-x-3 text-secondary/70 text-sm">
                                <Phone className="w-4 h-4 text-accent" />
                                <span>+91 7428 435 826</span>
                            </li>
                            <li className="flex items-center space-x-3 text-secondary/70 text-sm">
                                <Mail className="w-4 h-4 text-accent" />
                                <span>askupnxt@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/mexicasaa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-secondary/70 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>

                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-secondary/40">
                    <p>&copy; {new Date().getFullYear()} mexicasaa. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
