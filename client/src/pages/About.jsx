import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    const benefits = [
        "Certified Ethical Hackers & Security Analysts",
        "24/7 Real-time Threat Monitoring",
        "Customized Security Frameworks",
        "Global Compliance Adherence"
    ];

    return (
        <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Why Trust <span className="text-cyan-400">CyberSafe?</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            In an era of sophisticated cyber threats, we stand as your vigilant guardian. Our team combines decades of industry experience with cutting-edge technology to predict, prevent, and mitigate attacks before they impact your business.
                        </p>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            We don't just fix vulnerabilities; we build resilient security postures that enable your business to innovate with confidence.
                        </p>

                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3 text-white">
                                    <CheckCircle2 className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full" />
                        <div className="relative z-10 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                            <div className="grid grid-cols-2 gap-8 text-center">
                                <div className="p-4">
                                    <div className="text-4xl font-bold text-white mb-2">500+</div>
                                    <div className="text-gray-400 text-sm">Clients Protected</div>
                                </div>
                                <div className="p-4 border-l border-white/10">
                                    <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
                                    <div className="text-gray-400 text-sm">Threat Retention</div>
                                </div>
                                <div className="p-4 border-t border-white/10">
                                    <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                                    <div className="text-gray-400 text-sm">Support & Monitoring</div>
                                </div>
                                <div className="p-4 border-l border-t border-white/10">
                                    <div className="text-4xl font-bold text-white mb-2">10+</div>
                                    <div className="text-gray-400 text-sm">Years Experience</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
