import clsx from "clsx";

interface Props {
    validate: string | undefined;
    headingColor: string | undefined;
    infoColor: string | undefined;
}

export const useStyles = ({ validate, headingColor, infoColor }: Props) => {
    const infoBoxStyles = clsx({
        ["absolute bottom-0 items-center justify-center w-full text-center"]:
            validate,
        ["items-start justify-center py-20 px-20"]: !validate,
    });

    const titleStyles = clsx({
        [`${headingColor!}`]: headingColor,
        ["text-very-dark-des-blue"]: !headingColor,
    });

    const infoStyles = clsx({
        [`${headingColor!}`]: infoColor,
        ["text-dark-grayish-blue"]: !infoColor,
        ["px-[6rem] pb-4"]: validate,
    });

    return {
        infoBoxStyles,
        titleStyles,
        infoStyles,
    };
};
