import { useLocation } from "react-router-dom";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import { projectDetails, skills } from "./data/projectData";
import { useEffect, useRef } from "react";

function App() {
    const location = useLocation();
    const heroSecRef = useRef<HTMLDivElement>(null);
    const projectSecRef = useRef<HTMLElement>(null);
    const skillSecRef = useRef<HTMLElement>(null);
    const contactSecRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (location.pathname === "/") {
            heroSecRef.current?.scrollIntoView({ behavior: "smooth" });
        } else if (location.pathname === "/projects") {
            projectSecRef.current?.scrollIntoView({ behavior: "smooth" });
        } else if (location.pathname === "/skills") {
            skillSecRef.current?.scrollIntoView({ behavior: "smooth" });
        } else if (location.pathname === "/contact") {
            contactSecRef.current?.scrollIntoView({ behavior: "smooth" });
        } else {
            heroSecRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location.pathname]);

    return (
        <div className="font-noto-sans  text-[#27283d] ">
            <div className="bg-[#F0F4F8] px-9">
                <div className="max-w-5xl mx-auto" ref={heroSecRef}>
                    <Navbar />
                    <HeroSection />
                </div>
            </div>
            <div className="px-9">
                <div className="max-w-5xl mx-auto">
                    <ProjectsSection
                        projects={projectDetails}
                        ref={projectSecRef}
                    />
                    <SkillsSection skills={skills} ref={skillSecRef} />
                    <ContactSection ref={contactSecRef} />
                </div>
            </div>
            <div className="bg-[#27283d] text-white px-9">
                <Footer />
            </div>
        </div>
    );
}

export default App;
