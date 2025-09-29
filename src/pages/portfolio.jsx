import { useState, useEffect } from "react";
import ApiService from "../services/api.jsx";

function MyPortfolio() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [myPortfolio, setMyPortfolio] = useState([]);
    const [serviceList, setServiceList] = useState([]);
    const [openItemId, setOpenItemId] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {

        fetchPortfolioData();
    }, []);

    async function fetchPortfolioData() {
        try {
            const response = await ApiService.fetchPortfolio();
            setMyPortfolio(response.portfolio[0] || []);
            setServiceList(response.portfolio[0].servicesList);
            // console.log("Portfolio data:", response.portfolio[0]);
            setIsLoaded(true);
            const homeSection = document.getElementById('home');
            if (homeSection) homeSection.scrollIntoView({ behavior: 'auto', block: 'start' });

        } catch (error) {
            console.error("Failed to fetch portfolio data:", error);
        }
    }

    const handleRedirect = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    const navItems = ['Home', 'About', 'Work', 'Contact'];
    const scrollToSection = (sectionId) => {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        setActiveSection(sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const handleToggle = (id) => {
        setOpenItemId(prevId => (prevId === id ? null : id));
    }
    const word = "Hello";
    const lettersBounce = word.split("");

    return (
        <div className={`min-h-screen bg-gradient-to-br ${myPortfolio.backgroundColor} animate-gradient-xy text-gray-900`}>
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-medium">{myPortfolio.title}</div>

                        {/* Desktop navigation */}
                        <div className="hidden md:flex space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`text-sm font-medium transition-colors hover:text-gray-600 ${activeSection === item.toLowerCase() ? 'text-gray-900' : 'text-gray-500'
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Mobile navigation */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                        <div className="hidden md:block text-sm text-gray-500">Based in JB, 2025 ↗</div>
                    </div>

                    {/* mobile menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
                            <div className="flex flex-col space-y-2 pt-4">
                                {navItems.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                        className={`text-left py-2 px-4 text-sm font-medium transition-colors hover:bg-gray-50 rounded-lg ${activeSection === item.toLowerCase() ? 'text-gray-900 bg-gray-50' : 'text-gray-500'
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 pb-16 min-h-screen" id="home">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[70vh]">
                        {/* Left Content */}
                        <div className={`space-y-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>


                            {/* Main Heading */}
                            <div className="space-y-0">
                                <h1 className="text-6xl lg:text-7xl font-light leading-tight">
                                    {lettersBounce.map((letter, index) => (
                                        <span key={index} className="animate-bounce inline-block" style={{ animationDelay: `${index * 0.1}s`, marginRight: letter === '' ? '0.5rem' : '0' }}>{letter}</span>
                                    ))}
                                </h1>
                                <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                                    I'm Hamiezan, a developer focused on creating meaningful digital experiences through thoughtful design and clean code.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                <button
                                    className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors"
                                    onClick={() => handleRedirect(myPortfolio.resumeLink ? myPortfolio.resumeLink : '/error404-page')}
                                >
                                    <span>Download CV</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </button>

                                <div className="flex space-x-3">
                                    <button
                                        onClick={() => handleRedirect(myPortfolio.github || '')}
                                        className="p-3 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white/70 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => handleRedirect(myPortfolio.linkedin || '')}
                                        className="p-3 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white/70 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="pt-8 hidden md:block" >
                                <button className="group inline-flex items-center space-x-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                                    onClick={() => scrollToSection('about')}>
                                    <span>Scroll down</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Profile Image */}
                        <div className={`relative transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            <div className="relative">
                                {/* Profile placeholder */}
                                <div className="aspect-square w-full max-w bg-white/20 backdrop-blur-3xl rounded-3xl border-0">
                                    <div className="w-full h-full md flex items-center justify-center text-white text-6xl font-light">
                                        {myPortfolio.image ? (
                                            <img src={myPortfolio.image} alt="Profile" className="relative z-10 max-w-full max-h-full object-contain" />
                                        ) : (
                                            'E'
                                        )}
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-sm font-medium">
                                    2025
                                </div>

                                <div className="absolute -bottom-2 md:-bottom-8  -left-6 ml-2 bg-white rounded-xl p-4 shadow-lg">
                                    <div className="text-xs text-gray-500 mb-1">Currently</div>
                                    <div className="text-sm font-medium">{myPortfolio.currentJob}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-38 bg-white" id="about">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-light mb-8">About Me</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {myPortfolio.about1}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                {myPortfolio.about2}
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-medium mb-4">Services</h3>
                                <div className="space-y-0">
                                    {serviceList.map((service) => {
                                        const isOpen = openItemId === service.id;
                                        return (

                                            <div key={service.id} className=" border-b border-gray-100 last:border-b-0">
                                                <button
                                                    className="flex items-center justify-between w-full py-3 text-left group"
                                                    onClick={() => handleToggle(service.id)}
                                                > <span className="text-gray-700">{service.title}</span>
                                                    <svg
                                                        className={`w-4 h-4 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        {/* Chevron Right (to rotate) */}
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                                <div
                                                    // This combines max-h-0 when closed with a large max-h when open for smooth transition
                                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-4' : 'max-h-0'}`}
                                                >
                                                    <p className="text-sm text-gray-500">
                                                        {/* Display the service description here */}
                                                        {service.description || "No description available."}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 " id="work">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light mb-4">My Work</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Here are some of my recent projects that showcase my skills in frontend development,
                            UI/UX design, and problem-solving capabilities.
                        </p>
                        <p>
                            BUT DO STAY TUNED FOR THE UPDATE!
                            NOT FINISH YET HEHE
                        </p>

                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white" id="contact">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-light mb-8">Let's work together</h2>
                        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                            I'm always interested in new opportunities and collaborations.
                            Whether you have a project in mind or just want to connect, I'd love to hear from you.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-700 transition-colors"
                                onClick={() => handleRedirect('mailto:' + (myPortfolio.email || ''))}
                            >
                                <span>Get in touch</span>
                                <span>↗</span>
                            </button>

                            <div className="flex items-center space-x-4">
                                <span className="text-gray-400">or connect on</span>
                                <div className="flex space-x-3">
                                    <button
                                        onClick={() => handleRedirect(myPortfolio.linkedin)}
                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        LinkedIn
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-gray-400 mb-4 md:mb-0">
                            © 2025 Hamiezan. All rights reserved.
                        </div>
                        <div className="text-sm text-gray-400">
                            Built with React & Tailwind CSS
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default MyPortfolio;