import { BannerProps } from "../../models/AppProps";

import images from "../../resources/images";

export const Banner = ({ title, background }: BannerProps) => {
    return (
        <section className="relative">
            <img src={background} alt={title} className="w-full m-auto" />

            <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-white uppercase font-fraunces tracking-widest text-[2rem] md:text-[2.6rem] mt-0 md:mt-[-5rem] text-center">
                    {title}
                </h1>
                <img src={images.ArrowDownIcon} alt={title} className="mt-0 md:mt-16 max-w-[10px] md:max-w-[20px]" />
            </div>
        </section>
    );
};
