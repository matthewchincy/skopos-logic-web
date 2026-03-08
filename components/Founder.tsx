import { FaLinkedin, FaGithub } from 'react-icons/fa6';

export default function Founder() {
    return (
        <section id="founder" className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">The Architect Behind the Logic</h2>
                    <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
                        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                            With over a decade of experience leading R&amp;D teams, <strong className="text-navy-900">Matthew Chin</strong> specializes in transforming complex, high-scale engineering challenges into streamlined cloud-native solutions.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Recognized globally as an <strong className="text-navy-900">Alibaba Cloud Diamond MVP</strong>, his work spans mission-critical IoT for manufacturing to blockchain systems. Currently pursuing a PhD focused on Trustworthy AI and ESG, Matthew founded Skopos Logic to bridge the gap between rigorous academic truth and enterprise reality.
                        </p>
                        <div className="flex justify-center gap-6">
                            <a href="https://linkedin.com/in/matthewchincy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-navy-900 hover:text-teal-500 font-semibold transition">
                                <FaLinkedin className="text-xl" /> LinkedIn
                            </a>
                            <a href="https://github.com/matthewchincy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-navy-900 hover:text-teal-500 font-semibold transition">
                                <FaGithub className="text-xl" /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
