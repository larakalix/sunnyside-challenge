import { TestimonialProps } from "../../models/AppProps";
import { TestimonialInfo } from "./childs/TestimonialInfo";
import { TestimonialThumbnail } from "./childs/TestimonialThumbnail";

export const Testimonial = ({
    image,
    name,
    position,
    testimonial,
}: TestimonialProps) => {
    return (
        <div className="px-2">
            <TestimonialThumbnail {...{ image, name }} />

            <TestimonialInfo {...{ testimonial, name, position }} />
        </div>
    );
};
