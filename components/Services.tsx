import { FaSitemap, FaNetworkWired, FaCheck } from 'react-icons/fa6';

interface ServiceCardProps {
    icon: React.ReactNode;
    pillar: string;
    title: string;
    description: string;
    features: string[];
    badge?: string;
    colorClass: string;
}

function ServiceCard({ icon, pillar, title, description, features, badge, colorClass }: ServiceCardProps) {
    return (
        <div className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition duration-300 ${badge ? 'relative overflow-hidden' : ''}`}>
            {badge && (
                <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">{badge}</div>
            )}
            <div className={`w-14 h-14 ${colorClass} rounded-xl flex items-center justify-center text-2xl mb-6`}>
                {icon}
            </div>
            <span className="text-xs font-bold tracking-widest uppercase mb-2 block" style={{ color: pillar.includes('I') ? '#2563eb' : pillar.includes('II') ? '#14b8a6' : '#9333ea' }}>{pillar}</span>
            <h3 className="text-xl font-bold text-navy-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <ul className="space-y-2 mb-6 text-sm text-gray-600">
                {features.map((feature, index) => (
                    <li key={index}>
                        <FaCheck className="inline text-teal-500 mr-2" />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Services() {
    const services = [
        {
            icon: <FaSitemap />,
            pillar: 'Pillar I: Consulting',
            title: 'Fractional CTO & Architecture',
            description: 'Get 10 years of CTO experience without the full-time executive payroll. We audit infrastructures, design microservices, and ensure your stack won\'t break under pressure.',
            features: [
                'Cloud Cost & Security Audits',
                'Scalability Roadmaps',
                'Engineering Team Mentorship'
            ],
            colorClass: 'bg-blue-50 text-blue-600'
        },
        {
            icon: <FaNetworkWired />,
            pillar: 'Pillar II: Enterprise Solutions',
            title: 'Custom IoT & ESG AI',
            description: 'From smart factory floors to AgroTech. We build resilient, high-availability data pipelines and trustworthy AI models for predictive maintenance and ESG compliance.',
            features: [
                'End-to-End IoT Platforms',
                'Zero-Shot Learning Models',
                'Skopos Managed Cloud Hosting'
            ],
            badge: 'CORE FOCUS',
            colorClass: 'bg-teal-50 text-teal-600'
        }
    ];

    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Architected for Scale. Built for Trust.</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">Our services are divided into two core pillars designed to eliminate technical debt and accelerate growth.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            pillar={service.pillar}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                            badge={service.badge}
                            colorClass={service.colorClass}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
