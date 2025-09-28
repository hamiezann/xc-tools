import { useState } from "react";

function NotFoundPage() {
    const [isHovered, setIsHovered] = useState(false);

    const handleGoHome = () => {
        window.location.href = '/';
    };

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-300 via-indigo-50 to-purple-50 flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Illustration */}
                <div className="mb-8 relative">
                    {/* Main 404 Number */}
                    <div className="text-8xl md:text-9xl font-extrabold text-red-500 mb-4">
                        404
                    </div>

                    {/* Floating Icon */}
                    {/* <div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'
                            }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <svg
                                className="w-12 h-12 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.824-2.709M15 17.5c-1.5 0-3-1-4-2.5M9 17.5c1.5 0 3-1 4-2.5"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div> */}
                </div>

                {/* Error Message */}
                <div className="space-y-6 mb-12">
                    <h1 className="text-3xl md:text-4xl font-light text-gray-900">
                        Oops! Page Not Found
                    </h1>
                    <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                        The page you're looking for seems to have wandered off into the digital void.
                        Don't worry, it happens to the best of us!
                    </p>
                </div>

                {/* Illustration/Picture Area */}
                <div className="mb-12">
                    <div className="relative inline-block">
                        {/* Simple geometric illustration */}
                        <div className="w-64 h-40 mx-auto relative">
                            {/* Background shapes */}
                            <div className="absolute top-0 left-8 w-16 h-16 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
                            <div className="absolute top-8 right-12 w-12 h-12 bg-purple-200 rounded-full opacity-60 animate-pulse delay-200"></div>
                            <div className="absolute bottom-4 left-16 w-20 h-8 bg-indigo-200 rounded-full opacity-60 animate-pulse delay-400"></div>

                            {/* Main illustration - Broken link/chain */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={handleGoHome}
                        className="group inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>Go Home</span>
                    </button>

                    <button
                        onClick={handleGoBack}
                        className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors font-medium px-4 py-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Go Back</span>
                    </button>
                </div>

                {/* Help Links */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-4">Need help? Do help yourself.</p>
                    {/* <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                        <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                        <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
                        <a href="/help" className="text-gray-600 hover:text-gray-900 transition-colors">Help</a>
                    </div> */}
                </div>
            </div>

            {/* Floating background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-30 animate-ping"></div>
                <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-ping delay-1000"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-indigo-300 rounded-full opacity-30 animate-ping delay-500"></div>
            </div>
        </div>
    );
}

export default NotFoundPage;