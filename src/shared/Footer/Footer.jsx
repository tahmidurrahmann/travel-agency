import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="p-10 bg-[#000] text-neutral-content">
            <div className="max-w-screen-xl mx-auto footer">
                <aside>
                    <img className="w-[60px]" src="https://themes.themegoods.com/altair/demo/wp-content/themes/altair/images/logo@2x_white.png" alt="" />
                    <p className="text-white w-1/3">Embark on unforgettable journeys with Atlair — where every adventure is crafted to perfection.</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tahmidur-rahmann/"><FaLinkedin size={23}></FaLinkedin></a>
                        <a rel="noreferrer" target="_blank" href="https://github.com/tahmidurrahmann"><FaGithub size={23}></FaGithub></a>
                        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/tahmidurrahmann/"><FaFacebookF size={23}></FaFacebookF></a>
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/tahmidurahmann/"><FaInstagram size={23}></FaInstagram></a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;