interface Props {
    testimonial: string;
    name: string;
    position: string;
}

export const TestimonialInfo = ({ testimonial, name, position }: Props) => {
    return (
        <div className="my-12">
            <p className="text-very-dark-des-blue text-[0.7rem] leading-5 font-semibold">
                {testimonial}
            </p>

            <footer className="mt-14">
                <h3 className="text-center font-fraunces text-very-dark-des-blue font-bold">
                    {name}
                </h3>
                <h4 className="font-barlow text-center text-grayish-blue text-[0.7rem] mt-1">
                    {position}
                </h4>
            </footer>
        </div>
    );
};
