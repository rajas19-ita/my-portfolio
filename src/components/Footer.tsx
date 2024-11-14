const Footer: React.FC = () => {
    return (
        <footer className=" flex flex-col items-center py-4">
            <p className="text-center font-normal text-[#F0F4F8]">
                Built with{" "}
                <a
                    href="https://react.dev/"
                    target="_blank"
                    className="text-[#00B4CF]"
                >
                    React
                </a>{" "}
                by Rajas S. Kadge
            </p>
        </footer>
    );
};

export default Footer;
