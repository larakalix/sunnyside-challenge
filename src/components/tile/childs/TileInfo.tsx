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
    const validate = title && info && image;
    const { infoBoxStyles, titleStyles, infoStyles } = useStyles({
        validate,
        headingColor,
        infoColor,
    });

    return (
        <div className={`flex flex-col ${infoBoxStyles}`}>
            <h2
                className={`font-fraunces ${titleStyles} text-[1.6rem] font-extrabold w-[90%] mb-5`}
            >
                {title}
            </h2>
            <p className={`font-barlow text-[0.8rem] ${infoStyles} mb-5`}>
                {info}
            </p>

            {!validate && (
                <a href="#!" className="font-fraunces text-very-dark-des-blue">
                    Learn more
                </a>
            )}
        </div>
    );
};
