import { TileProps } from "../../models/AppProps";
import { TileInfo } from "./childs/TileInfo";
import { TileThumbnail } from "./childs/TileThumbnail";

export const Tile = ({
    id,
    image,
    title,
    info,
    headingColor,
    infoColor,
}: TileProps) => {
    return (
        <div className="relative">
            {title && info && (
                <TileInfo
                    {...{ id, title, info, image, headingColor, infoColor }}
                />
            )}
            {image && <TileThumbnail title={title ?? ""} {...{ image }} />}
        </div>
    );
};
