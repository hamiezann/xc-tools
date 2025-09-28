import { useEffect, useState } from 'react';
import { User, Clock, Sparkles, Code, Zap, MapPin, Plane, X, Github, Linkedin, Mail } from 'lucide-react'; // Added X for close icon
import Modal from 'react-modal';
// import ToolCard from './../components/Card.jsx';
// import BasicModal from '../components/Modal.jsx';
import ApiService from '../services/api.jsx';
import ToolCard from '../components/card.jsx';
import BasicModal from '../components/Modal.jsx';

function Home() {

    const [toolsArr, setToolsArr] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

    function closeModal() {
        setModalIsOpen(false);
    }

    function checkLoginStatus() {
        if (localStorage.getItem('auth_token')) {
            setIsConfirmationModalOpen(false);
            setModalIsOpen(true);
        }
        else {
            setIsConfirmationModalOpen(true);
        }
    }

    async function fetchTools() {
        try {
            const response = await ApiService.fetchTools();
            setToolsArr(response.tools);
        } catch (error) {
            console.error("Failed to fetch tools:", error);
        }
    }

    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;


    useEffect(() => {
        fetchTools();
    }, []);

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
            {/* background animation */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-3xl animate-pulse' />
                <div className='absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 blur-3xl animate-pulse' style={{ animationDelay: '2s' }} />
            </div>

            <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
                {/* header part */}
                <div className='mb-16 text-center'>
                    <div className='mb-8 flex items-center justify-center'>
                        <div className='relative'>
                            <button
                                onClick={checkLoginStatus}
                                className='text-white shadow-lg transition-transform hover:scale-105'
                            >
                                <img
                                    src="/logot.png"
                                    alt="About You"
                                    className='h-16 w-16 object-cover rounded-full border-4 border-white/20 shadow-xl' // Fixed: contain-content -> object-cover
                                />
                            </button>
                            <div className='absolute -top-1 -right-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-1'>
                                <Sparkles className='h-4 w-4 text-white' />
                            </div>
                        </div>
                    </div>
                    <h1 className="mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-6xl font-black text-transparent tracking-tight">
                        XC Tools
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-300 leading-relaxed">
                        Welcome to my personal toolkit – a curated collection of tools I've built to solve everyday challenges.
                    </p>
                </div>

                {/* about part */}
                <div className='mb-16 rounded-3xl bg-white/5 p-8 backdrop-blur-xl border border-white/10'>
                    <div className="flex items-center gap-3 mb-6">
                        <Code className="h-6 w-6 text-blue-400" />
                        <h2 className='text-2xl font-bold text-white'>About This Project</h2> {/* Fixed: removed extra quote */}
                    </div>

                    <div className='grid md:grid-cols-3 gap-6'>
                        <div className='text-center'>
                            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="mb-2 font-semibold text-white">Built for Speed</h3>
                            <p className='text-sm text-slate-400'>Fast, responsive tools that get things done in seconds.</p>
                        </div>

                        <div className='text-center'>
                            <div className='mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-400'>
                                <Sparkles className='h-6 w-6 text-white' />
                            </div>
                            <h3 className='mb-2 font-semibold text-white'>Innovative Solutions</h3>
                            <p className='text-sm text-slate-400'>To cater my lazy ass.</p>
                        </div>

                        <div className='text-center'>
                            <div className='mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-400'>
                                <Code className='h-6 w-6 text-white' />
                            </div>
                            <h3 className='mb-2 font-semibold text-white'>Free of Charge</h3>
                            <p className='text-sm text-slate-400'>Built openly and available for the community.</p>
                        </div>
                    </div>
                </div>

                {/* tools card */}
                <div className='mb-16'>
                    <h2 className='mb-8 text-3xl font-bold text-white text-center'>
                        Available Tools
                    </h2>
                    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3' >
                        {toolsArr.map(tool => (
                            <ToolCard key={tool.id} toolsArr={tool} />
                        ))}
                    </div>
                </div>

                <footer className='border-t border-white/10 pt-8'>
                    <div className='flex flex-col items-center gap-6 md:flex-row md:justify-between'>
                        <div className='text-center md-text-left'>
                            <p className='text-slate-300'>
                                Dev with <span className='text-red-400'>❤️</span> by XC
                            </p>
                            <p className='text-sm text-slate-500'>
                                Continuously Evolving and Elongating
                            </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <a href='https://github.com/hamiezann' target='_blank' className='group rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110'>
                                <Github className="h-5 w-5 text-slate-300 group-hover:text-white" />
                            </a>
                            <a
                                href="#" target='_blank'
                                className="group rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
                            >
                                <Linkedin className="h-5 w-5 text-slate-300 group-hover:text-white" />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=mhamiezan24@gmail.com" target='_blank'
                                className="group rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
                            >
                                <Mail className="h-5 w-5 text-slate-300 group-hover:text-white" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={false}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                    },
                    content: {
                        position: 'relative',
                        inset: 'auto',
                        border: 'none',
                        background: 'transparent',
                        overflow: 'visible',
                        borderRadius: '0',
                        outline: 'none',
                        padding: '0',
                    }
                }}
            >
                <div className="relative">
                    <button
                        onClick={closeModal}
                        className="absolute -top-4 -right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    <img
                        src="/logot.png"
                        alt="About You"
                        className="max-h-[400px] max-w-[400px] rounded-2xl border-4 border-white/30 shadow-2xl"
                    />
                </div>
            </Modal>

            <BasicModal modalColor="red" isOpen={isConfirmationModalOpen} onClose={() => setIsConfirmationModalOpen(false)}
                title={user ? "You are logged in 🎉" : "Login required!"}>
                {user ? (
                    <p> Welcome back  <span className="font-semibold">{user.username}</span></p>
                ) : (
                    <button onClick={() => (window.location.href = '/login')}
                        className="mt-3 px-4 py-2  bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition">
                        Go to Login
                    </button>
                )}
            </BasicModal>


        </div>
    );
}

export default Home;