import { useEffect, useState } from "react";
import clsx from "clsx";

import images from "../../resources/images";
import icons from "../../resources/icons";
import { APP_NAVIGATION } from "../../data/data";
import { DesktopNav } from "./childs/DesktopNav";
import { MobileNav } from "./childs/MobileNav";

export const Nav = () => {
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleClick = (value: boolean) => setShow(value);

    const controlNavbar = () => {
        if (typeof window !== "undefined")
            if (window.scrollY > 100) setHide(true);
            else setHide(false);

        if (window.scrollY < lastScrollY) setHide(false);

        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);

            return () => window.removeEventListener("scroll", controlNavbar);
        }
    }, [lastScrollY]);

    const styles = clsx({
        ["bg-[rgb(255, 255, 255, .85)] backdrop-blur-sm py-4"]:
            lastScrollY > 100,
    });

    return (
        <div
            className={`w-full fixed top-0 ${
                hide ? "opacity-0" : "opacity-100"
            } transition-all ${styles} px-8 py-8 z-50`}
        >
            <div
                className={`flex items-center justify-between flex-row md:max-w-5xl lg:max-w-7xl m-auto`}
            >
                <img src={images.Logo} alt="Sunnyside" />

                <div className="flex items-center justify-center">
                    <div>
                        <div className="flex md:hidden">
                            <div
                                className="text-[2rem] cursor-pointer text-black dark:text-white"
                                onClick={() => handleClick(!show)}
                            >
                                <img src={icons.BurgerIcon} alt="Burger Icon" />
                            </div>
                        </div>

                        <DesktopNav links={APP_NAVIGATION} />

                        {show ? (
                            <MobileNav
                                handleClick={handleClick}
                                links={APP_NAVIGATION}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};
