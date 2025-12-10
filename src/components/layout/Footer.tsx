import { Instagram, Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="relative bg-primary pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-4 space-y-6">
                        <Link to="/" className="inline-block">
                            <h2 className="text-3xl font-sans font-bold tracking-tighter text-white">
                                Mexicassa
                            </h2>
                        </Link>
                        <p className="text-secondary/60 font-light text-base leading-relaxed max-w-sm">
                            Transforming businesses with intelligent automation. We deliver production-ready AI solutions in 7 days, streamlining workflows and scaling operations.
                        </p>

                        <div className="flex space-x-4 pt-4">
                            {[
                                { icon: Linkedin, href: "#" },
                                { icon: Instagram, href: "https://www.instagram.com/upnxt_ai/" },
                                { icon: Send, href: "#" } // Telegram/Twitter
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary/60 hover:bg-accent hover:text-white hover:border-transparent transition-all duration-300"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2 md:col-start-6">
                        <h4 className="text-white font-medium text-sm uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Projects', path: '/projects' },
                                { name: 'Services', path: '/services' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Contact', path: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-secondary/60 hover:text-accent transition-colors duration-300 text-sm">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-medium text-sm uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-secondary/60 hover:text-accent transition-colors duration-300 text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-medium text-sm uppercase tracking-widest mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-secondary/60">
                                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                                <span className="text-sm">221B Baker Street,<br />London NW1 6XE, UK</span>
                            </li>
                            <li className="flex items-center space-x-3 text-secondary/60">
                                <Phone className="w-4 h-4 text-accent" />
                                <span className="text-sm">+91 7428 435 826</span>
                            </li>
                            <li className="flex items-center space-x-3 text-secondary/60">
                                <Mail className="w-4 h-4 text-accent" />
                                <span className="text-sm">askupnxt@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-secondary/40">
                    <p>&copy; {new Date().getFullYear()} UpNxt AI. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed & Built for the Future.</p>
                </div>
            </div>
        </footer>
    );
}
