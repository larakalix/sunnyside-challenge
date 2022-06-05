import { IAppInfo } from "../models/AppProps";
import images from "../resources/images";
import icons from "../resources/icons";
import testimonials from "../resources/testimonials";

export const APP_INFO: IAppInfo = {
    banner: {
        title: "We are creatives",
        background: images.HeaderImage,
    },
    tiles: [
        {
            id: "123",
            title: "Transform your brand",
            info: "We are full-service creative agency specializing in helping brands grow fast. Engage your clients trough compelling visuals that do most of the marketing for you.",
        },
        {
            id: "234",
            image: images.EggTileImage,
        },
        {
            id: "345",
            image: images.CupTileImage,
        },
        {
            id: "456",
            title: "Stand out to the right audience",
            info: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, well build and extend your brand in digital places.",
        },
        {
            id: "567",
            image: images.CherryTileImage,
            title: "Graphic design",
            info: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.",
            headingColor: "text-dark-des-cyan",
            infoColor: "text-dark-des-cyan",
        },
        {
            id: "678",
            image: images.OrangeTileImage,
            title: "Photography",
            info: "Increase your credibility by gettings the most stunning, high-quality photos that improve your business image.",
            headingColor: "text-dark-blue",
            infoColor: "text-dark-blue",
        },
    ],
    gallery: [
        {
            id: "321",
            image: images.GalleryConeTileImage,
        },
        {
            id: "432",
            image: images.GalleryMilkbottlesTileImage,
        },
        {
            id: "543",
            image: images.GalleryOrangeTileImage,
        },
        {
            id: "654",
            image: images.GallerySugarcubesTileImage,
        },
    ],
    testimonials: [
        {
            id: "121",
            image: testimonials.Emily,
            name: "Emily R.",
            position: "Marketing Director",
            testimonial:
                "We put our trust in Sunnyside and they delivered, making sure our needs were mete and deadlines were always hit.",
        },
        {
            id: "545",
            image: testimonials.Thomas,
            name: "Thomas S.",
            position: "Chief Operating Officer",
            testimonial:
                "Sunnysides's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
        },
        {
            id: "767",
            image: testimonials.Jennie,
            name: "Jennie F.",
            position: "Business Owner",
            testimonial:
                "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        },
    ],
};

export const APP_NAVIGATION: string[] = ["about", "services", "projects"];

export const APP_SOCIALS: string[] = [
    icons.FbIcon,
    icons.IgIcon,
    icons.PinterestIcon,
    icons.TwitterIcon,
];
