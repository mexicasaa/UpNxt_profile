export interface Project {
    id: string;
    image: string;
    title: string;
    category: string;
    description: string;
    client?: string;
    year?: string;
    services?: string[];
    // Detailed Case Study Data
    problem?: string;
    solution?: string;
    techStack?: string[];
    process?: {
        step: number;
        title: string;
        description: string;
    }[];
    results?: {
        metric: string;
        value: string;
        label: string;
    }[];
    caseStudyImages?: {
        dashboard: string;
        comparison: string;
    };
    gallery?: string[];
}

export const allProjects: Project[] = [
    {
        id: "1",
        image: "/projects/medpro-dashboard.png",
        title: "Med Pro AI Automation",
        category: "Healthcare Automation",
        description: "Implemented an AI voice and chat agent to handle appointment scheduling 24/7, reducing front-desk load by 90%.",
        client: "MedPro Clinics",
        year: "2024",
        services: ["Voice AI Agent", "WhatsApp Automation", "CRM Integration"],
        problem: "MedPro Clinics faced a high volume of missed calls (20%) and administrative burnout. Receptionists were overwhelmed with repetitive scheduling tasks, leading to lost revenue and poor patient experience.",
        solution: "We deployed a custom Voice AI Agent capable of handling natural conversations, booking appointments directly into their EMR, and answering FAQs. A WhatsApp bot was added for instant confirmations and reminders.",
        techStack: ["OpenAI Whisper", "Twilio", "Python", "Custom LLM", "WhatsApp Business API"],
        process: [
            { step: 1, title: "Analysis", description: "Audited call logs and appointment flow to identify bottlenecks." },
            { step: 2, title: "Voice Training", description: "Trained the AI model on real patient interactions to ensure empathy and accuracy." },
            { step: 3, title: "Integration", description: "Connected the AI agent with the clinic's existing calendar and EMR system." },
            { step: 4, title: "Launch", description: "Rolled out the system, resulting in immediate 24/7 coverage." }
        ],
        results: [
            { metric: "Bookings", value: "+300%", label: "Increase in online bookings" },
            { metric: "Missed Calls", value: "0%", label: "Reduction in missed opportunities" },
            { metric: "Cost", value: "-40%", label: "Reduction in admin overhead" }
        ],
        caseStudyImages: {
            dashboard: "/projects/medpro-dashboard.png",
            comparison: "/projects/medpro-comparison.png"
        },
        gallery: []
    },
    {
        id: "2",
        image: "/projects/luxeretail-dashboard.png",
        title: "Luxe Retail Support AI",
        category: "E-Commerce Support",
        description: "Deployed a custom LLM support agent that resolves 85% of tickets automatically with human-like empathy.",
        client: "LuxeRetail",
        year: "2023",
        services: ["Customer Support AI", "Sentiment Analysis", "Shopify Integration"],
        problem: "LuxeRetail was spending a fortune on 24/7 human support to handle basic queries like 'Where is my order?'. Response times were slow during peak seasons.",
        solution: "We engineered a fine-tuned LLM support agent that integrates deeply with Shopify. It knows order status, return policies, and can process refunds automatically within set limits.",
        techStack: ["LangChain", "OpenAI GPT-4", "Shopify API", "Pinecone"],
        process: [
            { step: 1, title: "Knowledge Base", description: "Ingested 2 years of support tickets to train the model on brand voice." },
            { step: 2, title: "Guardrails", description: "Implemented strict safety checks to prevent hallucinations." },
            { step: 3, title: "Live Testing", description: "A/B tested against human agents; AI resolved tickets 10x faster." }
        ],
        results: [
            { metric: "Costs", value: "$0", label: "Spent on Level 1 Support" },
            { metric: "Speed", value: "<1s", label: "Average Response Time" },
            { metric: "CSAT", value: "4.8/5", label: "Customer Satisfaction Score" }
        ],
        caseStudyImages: {
            dashboard: "/projects/luxeretail-dashboard.png",
            comparison: "/projects/luxeretail-comparison.png"
        },
        gallery: []
    },
    {
        id: "3",
        image: "/projects/urbanestates-dashboard.png",
        title: "Urban Estates Lead Flow",
        category: "Real Estate Tech",
        description: "Automated lead scrubbing and qualification system that interacts with leads instantly upon signup.",
        client: "Urban Estates",
        year: "2024",
        services: ["Lead Qualification", "SMS Automation", "CRM Sync"],
        problem: "Agents wasted hours calling unqualified leads. Leads were going cold because follow-ups took too long (avg. 4 hours).",
        solution: "We built an instant SMS outreach system. The moment a lead signs up, the AI engages them, asks qualifying questions (Budget? Location?), and only books calls for qualified prospects.",
        techStack: ["Make.com", "Twilio", "HubSpot", "OpenAI"],
        process: [
            { step: 1, title: "Workflow Design", description: "Mapped out the ideal lead journey from ad click to closing." },
            { step: 2, title: "Scripting", description: "Created persuasive AI scripts for SMS interaction." },
            { step: 3, title: "Sync", description: "Automated the update of lead status in HubSpot based on AI conversation." }
        ],
        results: [
            { metric: "Response", value: "24/7", label: "Instant Lead Engagement" },
            { metric: "Sales", value: "+45%", label: "Increase in Closed Deals" },
            { metric: "Time", value: "20h", label: "Saved per agent/month" }
        ],
        caseStudyImages: {
            dashboard: "/projects/urbanestates-dashboard.png",
            comparison: "/projects/urbanestates-comparison.png"
        },
        gallery: []
    },
    {
        id: "4",
        image: "/projects/fincorp-dashboard.png",
        title: "Fin Corp Audit AI",
        category: "Finance Automation",
        description: "Automated document processing pipeline for audit trails, reducing manual data entry by 100%.",
        client: "FinCorp Global",
        year: "2023",
        services: ["Document AI", "Audit Automation", "RPA"],
        problem: "Auditors were spending 40+ hours a week manually reviewing stats and receipts. Error rate was 5%.",
        solution: "We implemented an OCR + LLM pipeline that reads invoices, extracts key data, matches it against bank statements, and flags anomalies for human review.",
        techStack: ["AWS Textract", "Python", "Tableau", "OpenAI"],
        process: [
            { step: 1, title: "Digitization", description: "Deployed AWS Textract to convert physical receipts into structured JSON." },
            { step: 2, title: "Validation", description: "Built a Python engine to cross-reference extracted data with bank feeds." },
            { step: 3, title: "Reporting", description: "Automated the generation of audit-ready compliance reports in Tableau." }
        ],
        results: [
            { metric: "Accuracy", value: "99.9%", label: "Data Extraction Accuracy" },
            { metric: "Time", value: "-40hrs", label: "Saved per auditor/week" },
            { metric: "ROI", value: "15x", label: "Return on Investment" }
        ],
        caseStudyImages: {
            dashboard: "/projects/fincorp-dashboard.png",
            comparison: "/projects/fincorp-comparison.png"
        },
        gallery: []
    },
    {
        id: "5",
        image: "/projects/logitech-dashboard.png",
        title: "Logi Tech Route Optimization",
        category: "Logistics",
        description: "Predictive analytics model for delivery route optimization based on live traffic and weather data.",
        client: "LogiTech Solutions",
        year: "2024",
        services: ["Route Optimization", "Predictive Analytics", "Mobile App"],
        problem: "Delivery drivers were taking inefficient routes, leading to high fuel costs and late deliveries.",
        solution: "Built a real-time routing engine that adjusts paths based on traffic, weather, and package priority. Integrated with a custom driver mobile app.",
        techStack: ["Google Maps API", "TensorFlow", "React Native", "Node.js"],
        process: [
            { step: 1, title: "Data Integration", description: "Connected to live GPS feeds from the existing fleet management system." },
            { step: 2, title: "Optimization", description: "Trained a TensorFlow model to predict traffic patterns and suggest alternate routes." },
            { step: 3, title: "Deployment", description: "Launched a driver-facing mobile app for real-time navigation updates." }
        ],
        results: [
            { metric: "Fuel", value: "-20%", label: "Reduction in fuel costs" },
            { metric: "On-Time", value: "98%", label: "Delivery Success Rate" },
            { metric: "Fleets", value: "50+", label: "Vehicles Optimized" }
        ],
        caseStudyImages: {
            dashboard: "/projects/logitech-dashboard.png",
            comparison: "/projects/logitech-comparison.png"
        },
        gallery: []
    }
];

export const getFeaturedProjects = () => allProjects;
export const getProjectById = (id: string) => allProjects.find(p => p.id === id);
