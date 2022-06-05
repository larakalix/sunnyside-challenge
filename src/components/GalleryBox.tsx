import { GalleryProps } from "../models/AppProps";
import { Gallery } from "./gallery/Gallery";

interface Props {
    gallery: GalleryProps[];
}

export const GalleryBox = ({ gallery }: Props) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {gallery.map(({ id, ...props }) => (
                <Gallery key={`gallery-${id}`} id={id} {...props} />
            ))}
        </div>
    );
};
