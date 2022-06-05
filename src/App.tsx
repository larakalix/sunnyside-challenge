import {
    GalleryProps,
    IAppInfo,
    TestimonialProps,
    TileProps,
} from "./models/AppProps";
import { Nav } from "./components/nav/Nav";
import { Banner } from "./components/banner/Banner";
import { Footer } from "./components/footer/Footer";
import { GalleryBox, TestimonialBox, TilesBox } from "./components";

const App = ({ banner, tiles, gallery, testimonials }: IAppInfo) => {
    return (
        <>
            <Nav />
            <main>
                <div className="flex flex-col items-center justify-center w-full m-h-screen">
                    <Banner {...banner} />

                    <TilesBox tiles={tiles} />

                    <TestimonialBox testimonials={testimonials} />

                    <GalleryBox gallery={gallery} />

                    <Footer />
                </div>
            </main>
        </>
    );
};

export default App;
