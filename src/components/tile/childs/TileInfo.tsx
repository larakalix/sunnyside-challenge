import clsx from "clsx";
import { TileProps } from "../../../models/AppProps";
import { useStyles } from "../hooks/useStyles";

export const TileInfo = ({
    title,
    info,
    image,
    headingColor,
    infoColor,
}: TileProps) => {
    const validate = title && info && image ? true : false;
    const { infoBoxStyles, titleStyles, infoStyles } = useStyles({
        validate,
        headingColor,
        infoColor,
    });

    return (
        <div className={`flex flex-col ${infoBoxStyles}`}>
            <h2
                className={`font-fraunces ${titleStyles} text-[1.6rem] md:text-[1.8rem] lg:text-[2.6rem] xl:text-[4.8rem] font-extrabold w-[90%] mb-5`}
            >
                {title}
            </h2>
            <p
                className={`font-barlow text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.8rem] ${infoStyles} mb-5`}
            >
                {info}
            </p>

            {!validate && (
                <a
                    href="#!"
                    className="font-fraunces text-very-dark-des-blue text-[0.8rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.8rem]"
                >
                    Learn more
                </a>
            )}
        </div>
    );
};
