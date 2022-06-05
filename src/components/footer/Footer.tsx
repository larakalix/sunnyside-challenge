import { APP_NAVIGATION, APP_SOCIALS } from "../../data/data";
import images from "../../resources/images";

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center bg-footer-cyan w-full py-12">
            <img src={images.Logo} alt="Sunnyside" />

            <ul className="flex items-center justify-center space-x-16 my-8">
                {APP_NAVIGATION.map((title) => (
                    <li key={title}>
                        <a href="#!" className="text-dark-des-cyan capitalize">
                            {title}
                        </a>
                    </li>
                ))}
            </ul>

            <ul className="flex items-center justify-center space-x-8 mt-12">
                {APP_SOCIALS.map((social, index) => (
                    <li key={`social-net-${index}`}>
                        <a href="#!" target="_blank" rel="noopener noreferrer">
                            <img src={social} alt={`social-network-${index}`} />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
};
