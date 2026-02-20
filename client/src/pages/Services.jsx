import { motion } from 'framer-motion';
import { ShieldAlert, Activity, FileCheck, Globe2, Code, Laptop } from 'lucide-react';

const services = [
    {
        icon: <ShieldAlert className="h-10 w-10 text-red-500" />,
        title: 'VAPT Services',
        description: 'Comprehensive Vulnerability Assessment and Penetration Testing for web, mobile, and network infrastructure.',
    },
    {
        icon: <Activity className="h-10 w-10 text-green-500" />,
        title: 'SOC Monitoring',
        description: '24/7 Security Operations Center monitoring to detect and respond to threats in real-time.',
    },
    {
        icon: <FileCheck className="h-10 w-10 text-blue-500" />,
        title: 'Compliance & Audit',
        description: 'Guidance for ISO 27001, GDPR, HIPAA, and other regulatory compliance standards.',
    },
    {
        icon: <Globe2 className="h-10 w-10 text-purple-500" />,
        title: 'Cloud Security',
        description: 'Securing cloud environments (AWS, Azure, GCP) with best practices and configuration audits.',
    },
    {
        icon: <Code className="h-10 w-10 text-yellow-500" />,
        title: 'Secure Code Review',
        description: 'Identifies security flaws in application source code before deployment.',
    },
    {
        icon: <Laptop className="h-10 w-10 text-cyan-500" />,
        title: 'Endpoint Security',
        description: 'Protection for all enterprise endpoints against malware, ransomware, and zero-day exploits.',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-black relative">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 h-[400px] w-[60%] bg-blue-900/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Our Core <span className="text-cyan-400">Services</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We deliver end-to-end cybersecurity solutions tailored to protect your business assets and reputation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-black/50 w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-white/20">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
