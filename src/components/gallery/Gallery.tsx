import { GalleryProps } from "../../models/AppProps";

export const Gallery = ({ id, image }: GalleryProps) => {
    return (
        <div>
            <img src={image} alt={`Photo ${id}`} className="w-full m-auto" />
        </div>
    );
};
