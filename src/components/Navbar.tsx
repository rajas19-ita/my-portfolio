import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <header className="py-5 rounded-b-md">
            <div className="flex justify-between ">
                <h1 className="text-3xl font-medium ">
                    <span className="text-[rgb(0,180,207)]">r</span>ajas
                    <span className="text-[#00B4CF]">SK</span>
                </h1>
                <nav className="flex items-center">
                    <ul className="flex gap-6 items-center">
                        <li>
                            <NavLink
                                to={"/"}
                                className="hover:text-[#00B4CF] active:text-[#00B4CF]"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/projects"}
                                className="hover:text-[#00B4CF] active:text-[#00B4CF]"
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/skills"}
                                className="hover:text-[#00B4CF] active:text-[#00B4CF]"
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/contact"}
                                className="rounded-md border-2 border-[#00B4CF] hover:text-[#00B4CF] active:text-[#00B4CF] py-2 px-3 bg-opacity-70 font-medium"
                            >
                                Get in Touch
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Navbar;
