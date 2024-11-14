import { forwardRef } from "react";
import { SkillsSectionProps } from "../types/projectTypes";

const SkillsSection = forwardRef<HTMLElement, SkillsSectionProps>(
    ({ skills }: SkillsSectionProps, ref) => {
        return (
            <section className="pt-20 flex flex-col gap-10" ref={ref}>
                <h2 className="text-center text-3xl underline underline-offset-4 mb-2">
                    My Skills
                </h2>
                <div className="w-full max-w-3xl mx-auto flex gap-8 justify-center flex-wrap">
                    {skills.map((skill, i) => (
                        <div
                            className="flex flex-col gap-2 items-center"
                            key={i}
                        >
                            <div className=" w-16 h-16">
                                <img src={skill.logo} />
                            </div>
                            <h3 className="font-medium">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
);

export default SkillsSection;
