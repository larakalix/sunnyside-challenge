interface Props {
    title: string;
    image: string;
}

export const TileThumbnail = ({ title, image }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={image} alt={title} className="w-full" />
        </div>
    );
};
