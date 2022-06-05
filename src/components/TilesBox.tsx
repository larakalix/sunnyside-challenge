import { TileProps } from "../models/AppProps";
import { Tile } from "./tile/Tile";

interface Props {
    tiles: TileProps[];
}

export const TilesBox = ({ tiles }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {tiles.map(({ id, ...props }) => (
                <Tile key={`tile-${id}`} id={id} {...props} />
            ))}
        </div>
    );
};
