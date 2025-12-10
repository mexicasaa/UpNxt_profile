import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export function Contact() {
    return (
        <div className="min-h-screen bg-primary text-secondary relative overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 aurora-bg">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
            </div>

            {/* Header */}
            <section className="pt-32 pb-12 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
                            Contact Us
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
                            Start Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Automation Journey.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="pb-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Contact Form */}
                        <div className="glass-panel rounded-3xl p-8 md:p-12">
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-accent font-semibold">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-accent focus:outline-none transition-colors placeholder:text-white/20"
                                            placeholder="Elon"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-accent font-semibold">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-accent focus:outline-none transition-colors placeholder:text-white/20"
                                            placeholder="Musk"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-accent font-semibold">Work Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-accent focus:outline-none transition-colors placeholder:text-white/20"
                                        placeholder="elon@x.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="interest" className="text-xs uppercase tracking-widest text-accent font-semibold">I'm interested in...</label>
                                    <select
                                        id="interest"
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-accent focus:outline-none transition-colors [&>option]:bg-primary"
                                    >
                                        <option value="">Select a solution</option>
                                        <option value="chatbots">AI Customer Support</option>
                                        <option value="workflow">Workflow Automation</option>
                                        <option value="data">Data Extraction & Analysis</option>
                                        <option value="consulting">Enterprise Consulting</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-accent font-semibold">Project Details</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-accent focus:outline-none transition-colors resize-none placeholder:text-white/20"
                                        placeholder="Tell us about your processes..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-accent hover:text-white transition-all duration-300 w-full md:w-auto justify-center"
                                >
                                    Send Request
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-16">
                            <div>
                                <h3 className="text-2xl font-bold mb-8 text-white">Direct Channels</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-secondary/60 mb-1">Email</p>
                                            <a href="mailto:hello@upnxt.ai" className="text-xl text-white hover:text-accent transition-colors">hello@upnxt.ai</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-secondary/60 mb-1">Live Chat</p>
                                            <button className="text-xl text-white hover:text-accent transition-colors text-left">Start a conversation</button>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-secondary/60 mb-1">HQ</p>
                                            <p className="text-xl text-white">Silicon Valley, CA<br /><span className="text-base text-secondary/50">Operating Globally</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-accent/10 border border-accent/20">
                                <h3 className="text-xl font-bold text-white mb-4">Fast Track?</h3>
                                <p className="text-secondary/70 mb-6">Skip the queue. Book a 15-min discovery call directly with our engineering team.</p>
                                <button className="text-accent uppercase tracking-widest text-sm font-bold hover:text-white transition-colors flex items-center gap-2">
                                    Book Now <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

import { ArrowUpRight } from 'lucide-react';
