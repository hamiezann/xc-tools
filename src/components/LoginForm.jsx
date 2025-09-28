import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { LogIn, Loader2, Eye, EyeOff, Lock, User, Sparkles } from "lucide-react";

function LoginForm() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        const result = await login(credentials.username, credentials.password)
        if (!result.success) {
            setError(result.error);
            setLoading(false);
            return;
        } else {
            setLoading(false);
            window.location.href = "/";
        }
    };

    return (
        // <div className="bg-gradient-to-br from-blue-700 to bg-purple-300 min-h-screen flex items-center justify-center">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden flex items-center justify-center p-4">
            <div className="relative z-10 w-full max-w-md">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space y-6">
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-2">
                                XC Tools
                            </h1>
                            <p className="text-slate-400 text-sm">Access your personal toolkit</p>
                        </div>
                        {error && <div className="error-message text-red-500 mb-4 text-center">{error}</div>}
                        <div className="space-y-2">
                            <label className="text-slate-300 text-sm font-medium flex items-center gap-2">
                                <User className="h-4 w-4" /> Username
                            </label>
                            <div className="mb-4">
                                {/* <label className="block text-gray-700 mb-2" htmlFor="username">Username</label> */}
                                <input
                                    type="text"
                                    id="username"
                                    value={credentials.username}
                                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-slate-300 text-sm font-medium flex items-center gap-2">
                                <Lock className="h-4 w-4" />
                                Password
                            </label>
                            <div className="mb-6">
                                {/* <label className="block text-gray-700 mb-2" htmlFor="password">Password</label> */}
                                <input
                                    type="password"
                                    id="password"
                                    value={credentials.password}
                                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={loading || !credentials.username || !credentials.password}
                            className={`w-full relative overflow-hidden rounded-2xl py-4 font-semibold text-white transition-all duration-300 ${loading || !credentials.username || !credentials.password
                                    ? 'bg-slate-600 cursor-not-allowed opacity-50'
                                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98]'
                                }`}
                        >
                            {/* Button background animation */}
                            {!loading && credentials.username && credentials.password && (
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            )}

                            <div className="relative flex items-center justify-center gap-3">
                                {loading ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        <span>Signing in...</span>
                                    </>
                                ) : (
                                    <>
                                        <LogIn className="h-5 w-5" />
                                        <span>Sign In</span>
                                    </>
                                )}
                            </div>
                        </button>

                    </form>
                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-xs">
                            Secure access to XC Tools Dashboard
                        </p>
                        <div className="flex items-center justify-center gap-1 mt-2">
                            <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-green-400 text-xs font-medium">System Online</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;