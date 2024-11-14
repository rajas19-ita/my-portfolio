import heroImg from "../assets/heroImg.jpg";
import { FaGithub } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <section className="flex gap-20 pt-10 pb-20 justify-center">
            <div className="flex flex-col gap-4">
                <h1 className="text-6xl leading-[1.15]">
                    <span className="text-4xl font-normal">Hi There, I'm</span>
                    <br />
                    <span className="font-medium">Rajas Kadge</span>
                </h1>
                <p className="text-lg ml-1 mb-3">
                    <span className=" underline decoration-[#00B4CF] underline-offset-[3px] decoration-2">
                        Full-Stack Web Developer
                    </span>{" "}
                    with Passion
                    <br /> for{" "}
                    <span className="underline underline-offset-[3px] decoration-[#00B4CF] decoration-2">
                        Design
                    </span>
                </p>
                <div className="flex gap-2">
                    <a
                        href="https://github.com/rajas19-ita"
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-2 bg-[#27283D] text-white rounded-md"
                    >
                        <FaGithub className="" size="22" />
                        <span className="font-medium ">Github</span>
                    </a>
                </div>
            </div>
            <div className="self-center w-52 mr-10">
                <img
                    src={heroImg}
                    className="w-full aspect-square object-cover rounded-full "
                />
            </div>
        </section>
    );
};
export default HeroSection;
