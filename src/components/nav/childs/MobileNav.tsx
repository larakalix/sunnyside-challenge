import { ContactLink } from "./ContactLink";

interface Props {
    links: string[];
    handleClick: (value: boolean) => void;
}

export const MobileNav = ({ links, handleClick }: Props) => {
    return (
        <div className="absolute top-16 right-7 left-7 bg-white flex items-center ease-out py-8">
            <ul className="flex flex-col w-full justify-between items-center space-y-4">
                {links.map((label) => (
                    <Link key={label} label={label} />
                ))}
                <ContactLink />
            </ul>
        </div>
    );
};

const Link = ({ label }: { label: string }) => {
    return (
        <li className="cursor-pointer py-4 capitalize font-barlow text-dark-grayish-blue text-[1.2rem]">
            {label}
        </li>
    );
};
