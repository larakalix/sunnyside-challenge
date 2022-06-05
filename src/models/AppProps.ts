export interface IAppInfo {
    banner: BannerProps;
    tiles: TileProps[];
    gallery: GalleryProps[];
    testimonials: TestimonialProps[];
}

export interface BannerProps {
    title: string;
    background: string;
}

export interface TileProps {
    id: string;
    title?: string;
    info?: string;
    image?: string;
    route?: string;
    headingColor?: string;
    infoColor?: string;
}

export interface GalleryProps {
    id: string;
    image: string;
}

export interface TestimonialProps {
    id: string;
    image: string;
    name: string;
    position: string;
    testimonial: string;
}
