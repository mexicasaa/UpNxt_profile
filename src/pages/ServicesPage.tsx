import { Bot, Workflow, Database, Brain, BarChart, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Bot className="w-8 h-8" />,
        title: "Intelligent Chatbots",
        description: "24/7 support agents training on your knowledge base. Handle 80% of L1 queries instantly.",
        features: ["Multi-channel Support", "Sentiment Analysis", "Seamless Handoff"]
    },
    {
        icon: <Workflow className="w-8 h-8" />,
        title: "Workflow Automation",
        description: "End-to-end automation of repetitive tasks using Zapier, Make, and custom Python scripts.",
        features: ["CRM Sync", "Email Automation", "Document Processing"]
    },
    {
        icon: <Brain className="w-8 h-8" />,
        title: "AI Agents",
        description: "Autonomous agents that can research, plan, and execute multi-step complex tasks.",
        features: ["Market Research", "Lead Qualification", "Content Generation"]
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: "Data Extraction",
        description: "Scrape and structure data from any web source or internal document for actionable insights.",
        features: ["Web Scraping", "PDF Parsing", "Data Enrichment"]
    },
    {
        icon: <BarChart className="w-8 h-8" />,
        title: "Predictive Analytics",
        description: "Custom ML models to forecast sales, churn, and market trends based on your historical data.",
        features: ["Sales Forecasting", "Risk Assessment", "Customer Segmentation"]
    },
    {
        icon: <Code2 className="w-8 h-8" />,
        title: "Custom LLM Dev",
        description: "Fine-tune open source models (Llama, Mistral) on your proprietary data for secure enterprise use.",
        features: ["Fine-tuning", "RAG Systems", "On-premise Deployment"]
    }
];

export function ServicesPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* Header */}
            <section className="pt-32 pb-24 border-b border-white/10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
                            Enterprise <br /> Capabilities.
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed">
                            We deploy state-of-the-art AI infrastructure designed for speed, scalability, and security to give you the competitive edge.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-colors duration-500 rounded-sm"
                            >
                                <div className="w-16 h-16 flex items-center justify-center text-white mb-8 bg-black border border-white/10 rounded-sm group-hover:bg-white group-hover:text-black transition-all duration-500">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-white">
                                    {service.title}
                                </h3>

                                <p className="text-white/60 font-light leading-relaxed mb-8 h-20">
                                    {service.description}
                                </p>

                                <ul className="space-y-4 mb-8 border-t border-white/10 pt-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-white/40 font-mono uppercase tracking-wider">
                                            <div className="w-1 h-1 bg-white rounded-full mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
