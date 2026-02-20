import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-black relative">
            {/* Decorative bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Get in <span className="text-cyan-400">Touch</span>
                    </motion.h2>
                    <p className="text-gray-400">
                        Ready to secure your infrastructure? Contact our experts today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <ContactInfo
                            icon={<Mail className="h-6 w-6 text-cyan-400" />}
                            title="Email Us"
                            content="security@cybersafe.com"
                            href="mailto:security@cybersafe.com"
                        />
                        <ContactInfo
                            icon={<Phone className="h-6 w-6 text-cyan-400" />}
                            title="Call Us"
                            content="+1 (555) 123-4567"
                            href="tel:+15551234567"
                        />
                        <ContactInfo
                            icon={<MapPin className="h-6 w-6 text-cyan-400" />}
                            title="Visit Us"
                            content="123 Cyber Park Blvd, Tech City, TC 90210"
                            href="#"
                        />

                        <div className="pt-8 border-t border-white/10">
                            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                {/* Social placeholders */}
                                <div className="h-10 w-10 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-gray-400">
                                    LN
                                </div>
                                <div className="h-10 w-10 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-gray-400">
                                    TW
                                </div>
                                <div className="h-10 w-10 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-gray-400">
                                    FB
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="john@company.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors">
                                    <option>General Inquiry</option>
                                    <option>Request VAPT Audit</option>
                                    <option>SOC Services</option>
                                    <option>Compliance Assistance</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(8,145,178,0.4)]">
                                Send Message <Send className="h-5 w-5" />
                            </button>
                        </div>
                    </motion.form>
                </div>

                <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-600">
                    <p>&copy; 2024 CyberSafe. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

const ContactInfo = ({ icon, title, content, href }) => (
    <a href={href} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
        <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 text-cyan-400 transition-colors">
            {icon}
        </div>
        <div>
            <h4 className="text-white font-medium mb-1">{title}</h4>
            <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">{content}</p>
        </div>
    </a>
)

export default Contact;
