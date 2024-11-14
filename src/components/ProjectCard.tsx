import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ProjectCardProps } from "../types/projectTypes";

const ProjectCard: React.FC<ProjectCardProps> = ({ details }) => {
    return (
        <div
            className="p-11 rounded-md bg-[#F0F4F8] hover:bg-[#E3EBF2] transition-all w-full max-w-4xl self-center
    grid grid-cols-2 gap-7 relative overflow-hidden shadow-sm"
        >
            <div className="flex flex-col gap-3.5">
                <h3 className="text-2xl font-medium">{details.title}</h3>
                <ul className="flex gap-3">
                    {details.techUsed.map((tech) => (
                        <li key={tech.name}>
                            <img
                                src={tech.logo}
                                className={tech.width ? tech.width : "w-10"}
                                alt={tech.name}
                            />
                        </li>
                    ))}
                </ul>
                <p className=" text-[#4A4B5E] leading-relaxed mb-2">
                    {details.description}
                </p>
                <div className="flex gap-3">
                    <a
                        href={details.githubLink}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-1.5 bg-[#27283D] text-white rounded-md"
                    >
                        <FaGithub className="" size="22" />
                        <span className="font-medium ">Github</span>
                    </a>
                    <a
                        href={details.liveLink}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md border-2 border-[#27283D]"
                    >
                        <FaExternalLinkAlt />
                        <span className="font-medium">Live</span>
                    </a>
                </div>
            </div>
            <div className="absolute w-[53%] left-[52%] top-[14%] rounded-md shadow-md">
                <img src={details.img} className="w-full rounded-md" />
            </div>
        </div>
    );
};

export default ProjectCard;
