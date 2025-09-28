import { useState } from "react";
import { Zap } from "lucide-react";
import { iconMap } from "./icons.jsx";
import { useNavigate } from "react-router-dom";

function ToolCard({ toolsArr }) {
    const [hoveredCard, setHoveredCard] = useState(false);
    const Icon = iconMap[toolsArr.icon?.toLowerCase()] || Zap;
    const navigate = useNavigate();
    const handleRedirect = () => {
        if (toolsArr.status === "coming-soon") return;
        (toolsArr.link.startsWith('http') ? window.open(toolsArr.link, '_blank', "noopener,noreferrer") : navigate(toolsArr.link));
    }

    const onButtonRedirect = (e) => {
        e.stopPropagation();
        handleRedirect();
    }

    return (
        <div
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${toolsArr.colors} p-6 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${toolsArr.status === 'coming-soon' ? 'opacity-75' : 'cursor-pointer'}`}
            onMouseEnter={() => setHoveredCard(true)}
            onMouseLeave={() => setHoveredCard(false)}
            onClick={handleRedirect}
        >
            <div className="absolute inset-0 opacity-20">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-2 w-2 rounded-full bg-white animate-pulse"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 12}%`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-white" />
                    </div>
                    {toolsArr.status === 'coming-soon' && (
                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                            Coming Soon
                        </span>
                    )}
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">{toolsArr.title}</h3>
                <p className="text-sm text-white/90 leading-relaxed">{toolsArr.description}</p>

                <div className={`mt-6 transform transition-all duration-300 ${hoveredCard ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <button
                        className="flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                        disabled={toolsArr.status === 'coming-soon'} onClick={onButtonRedirect}
                    >
                        {toolsArr.status === 'coming-soon' ? 'Stay Tuned' : 'Launch Tool'}
                        <Zap className="h-4 w-4" />
                    </button>
                </div>
            </div>

            <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${hoveredCard ? 'opacity-100' : 'opacity-0'}`} />
        </div>
    );
}

function ProjectCard({ project }) {

}

export default ToolCard;
export { ProjectCard };