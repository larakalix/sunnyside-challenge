interface Props {
    testimonial: string;
    name: string;
    position: string;
}

export const TestimonialInfo = ({ testimonial, name, position }: Props) => {
    return (
        <div className="my-12">
            <p className="text-very-dark-des-blue text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] leading-5 md:leading-tight font-semibold">
                {testimonial}
            </p>

            <footer className="mt-14">
                <h3 className="text-center font-fraunces text-very-dark-des-blue font-bold text-[1rem] lg:text-[1.2rem] xl:text-[1.6rem]">
                    {name}
                </h3>
                <h4 className="font-barlow text-center text-grayish-blue text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] mt-1">
                    {position}
                </h4>
            </footer>
        </div>
    );
};
