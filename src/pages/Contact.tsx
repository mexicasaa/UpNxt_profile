import { ArrowLeft, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Contact() {
    return (
        <div className="min-h-screen bg-primary text-secondary relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[128px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

            {/* Header */}
            <section className="pt-32 pb-12 relative z-10">
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
                            Get in <span className="text-accent italic">Touch</span>
                        </h1>
                        <p className="text-secondary/70 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                            Ready to elevate your brand? Let's create something extraordinary together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="pb-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Contact Form */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-accent">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                                            placeholder="Jane"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-accent">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-accent">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                                        placeholder="jane@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-xs uppercase tracking-widest text-accent">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-accent focus:outline-none transition-colors [&>option]:bg-primary"
                                    >
                                        <option value="">Select a topic</option>
                                        <option value="campaign">Campaign Inquiry</option>
                                        <option value="model">Model Representation</option>
                                        <option value="collaboration">Brand Collaboration</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-accent">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-accent focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="group flex items-center gap-3 bg-accent text-primary px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-white transition-all duration-300 w-full md:w-auto justify-center"
                                >
                                    Send Message
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-16">
                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-8 text-white">Contact Information</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-secondary/60 mb-1">Email Us</p>
                                            <a href="mailto:askupnxt@gmail.com" className="text-xl text-white hover:text-accent transition-colors">askupnxt@gmail.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-secondary/60 mb-1">Call Us</p>
                                            <a href="tel:+917428435826" className="text-xl text-white hover:text-accent transition-colors">+91 7428 435 826</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-secondary/60 mb-1">Visit Us</p>
                                            <p className="text-xl text-white">221B Baker Street,<br />London NW1 6XE, United Kingdom</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder or Additional Info */}
                            <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 group">
                                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="text-accent text-sm uppercase tracking-widest">Global Presence</p>
                                </div>
                                {/* You could embed a real map here if requested */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
