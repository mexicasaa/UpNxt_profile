import { Instagram, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer id="contact" className="relative bg-primary text-secondary pt-24 pb-12 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-8">
                        <a href="#" className="inline-block">
                            <h2 className="text-4xl font-serif font-bold tracking-tighter text-white mb-2">
                                mexicasaa
                            </h2>
                            <div className="h-1 w-20 bg-accent rounded-full" />
                        </a>
                        <p className="text-secondary/60 font-light text-lg leading-relaxed max-w-md">
                            Premier model management agency connecting exceptional talent with global brands. We shape careers and define the future of fashion.
                        </p>

                        <div className="flex space-x-4 pt-4">
                            {[
                                { icon: Instagram, href: "https://www.instagram.com/mexicasaa/" },
                                { icon: Facebook, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Linkedin, href: "#" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-secondary/60 hover:bg-white hover:text-primary hover:border-white transition-all duration-300 group"
                                >
                                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 md:col-start-7">
                        <h4 className="text-white font-medium text-lg mb-8 flex items-center">
                            <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                            Explore
                        </h4>
                        <ul className="space-y-4">
                            {['Models', 'Services', 'About Us', 'Journal', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="group flex items-center text-secondary/60 hover:text-accent transition-colors duration-300">
                                        <span className="w-0 group-hover:w-2 h-px bg-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-medium text-lg mb-8 flex items-center">
                            <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                            Get in Touch
                        </h4>
                        <ul className="space-y-6">
                            <li className="group flex items-start space-x-4 text-secondary/60 hover:text-white transition-colors duration-300">
                                <MapPin className="w-5 h-5 text-accent mt-1 group-hover:scale-110 transition-transform duration-300" />
                                <span className="leading-relaxed">221B Baker Street,<br />London NW1 6XE, UK</span>
                            </li>
                            <li className="group flex items-center space-x-4 text-secondary/60 hover:text-white transition-colors duration-300">
                                <Phone className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                                <span>+91 7428 435 826</span>
                            </li>
                            <li className="group flex items-center space-x-4 text-secondary/60 hover:text-white transition-colors duration-300">
                                <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                                <span>askupnxt@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary/40">
                    <p>&copy; {new Date().getFullYear()} mexicasaa. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
