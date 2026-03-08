export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy-900 text-white">
            <div className="absolute inset-0 opacity-10">
                <svg className="absolute right-0 top-0 h-full w-1/2 transform translate-x-1/3" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="currentColor"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:w-2/3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold mb-6">
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                        Enterprise Technology Consultancy
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Bridging Cloud Architecture with <span className="gradient-text">Trustworthy AI</span>.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                        We help enterprises and high-growth startups scale their infrastructure, deploy resilient IoT platforms, and leverage artificial intelligence with deterministic confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#services" className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 transition text-center shadow-lg shadow-teal-500/30">
                            View Our Solutions
                        </a>
                        <a href="https://t.me/matthewchin" target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition text-center backdrop-blur-sm flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                            Consult with our CTO
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
