export interface TechUsed {
    name: string;
    logo: string;
    width?: string;
}

export interface ProjectDetails {
    id: number;
    title: string;
    img: string;
    description: string;
    githubLink: string;
    liveLink: string;
    techUsed: TechUsed[];
}

export interface ProjectCardProps {
    details: ProjectDetails;
}

export interface ProjectSectionProps {
    projects: ProjectDetails[];
}

export interface SkillsSectionProps {
    skills: TechUsed[];
}
