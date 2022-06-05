import { TestimonialProps } from "../models/AppProps";
import { Testimonial } from "./testimonial/Testimonial";

interface Props {
    testimonials: TestimonialProps[];
}

export const TestimonialBox = ({ testimonials }: Props) => {
    return (
        <section className="text-center flex flex-col items-center justify-center max-w-[80%]">
            <h1 className="my-14 font-fraunces uppercase text-[1rem] tracking-widest text-grayish-blue">
                Client testimonials
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {testimonials.map(({ id, ...props }) => (
                    <Testimonial key={`testimonial-${id}`} id={id} {...props} />
                ))}
            </div>
        </section>
    );
};
