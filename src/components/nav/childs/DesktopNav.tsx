import { ContactLink } from "./ContactLink";

export const DesktopNav = ({ links }: { links: string[] }) => {
    return (
        <ul className="hidden md:flex md:flex-row space-x-10 items-center">
            {links.map((label) => (
                <li key={label} className="text-white capitalize">{label}</li>
            ))}
            <ContactLink />
        </ul>
    );
};
