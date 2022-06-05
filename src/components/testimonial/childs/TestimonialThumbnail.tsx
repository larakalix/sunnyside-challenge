interface Props {
    image: string;
    name: string;
}

export const TestimonialThumbnail = ({ name, image }: Props) => {
    return (
        <div className="overflow-hidden rounded-full text-center m-auto w-[5rem]">
            <img src={image} alt={name} className="m-auto" />
        </div>
    );
};
