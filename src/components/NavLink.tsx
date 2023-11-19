import Link from 'next/link';

type LinkType = {
  title: string;
  href: string;
};

const NavLink = ({title, href}: LinkType) => {
  return (
    <Link
      href={href}
      className="p-3 text-white text-base-lg md:text-base-normal md:text-blue-30 whitespace-nowrap md:relative md:after:content-[''] md:after:absolute md:after:bottom-[0.5rem] after:w-[calc(100%-1.5rem)] md:after:left-3 md:after:scale-x-0 md:after:origin-right md:after:hover:origin-left after:hover:scale-x-100 md:after:h-[2px] md:after:bg-blue-30 md:after:transition-transform md:after:duration-300 md:after:ease-in-out"
    >
      {title}
    </Link>
  );
};

export default NavLink;
