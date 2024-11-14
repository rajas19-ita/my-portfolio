import { forwardRef } from "react";
import { ProjectSectionProps } from "../types/projectTypes";
import ProjectCard from "./ProjectCard";

const ProjectsSection = forwardRef<HTMLElement, ProjectSectionProps>(
    ({ projects }: ProjectSectionProps, ref) => {
        return (
            <section className="pt-20 flex flex-col gap-10" ref={ref}>
                <h2 className="text-center text-3xl underline underline-offset-4 mb-2">
                    My Projects
                </h2>

                {projects.map((project) => (
                    <ProjectCard details={project} key={project.id} />
                ))}
            </section>
        );
    }
);

export default ProjectsSection;
