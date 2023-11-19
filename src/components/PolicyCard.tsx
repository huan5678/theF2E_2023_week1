import {cn} from '@/lib/utils';
import Link from 'next/link';

type PolicyCardProps = {
  title: string;
  link: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};
const PolicyCard = ({title, link, className, style, children}: PolicyCardProps) => {
  return (
    <div
      className={cn(
        `group h-[11.3125rem] md:h-[19.3125rem] inline-flex flex-col justify-center items-center gap-4 md:gap-6 rounded-[0.625rem] md:rounded-[1.25rem] transition duration-300 bg-white/60 hover:bg-orange-50/60`,
        className
      )}
      style={style}
    >
      {children}
      <p className="text-h4 z-[1]" dangerouslySetInnerHTML={{__html: title}} />
      <Link
        href={link}
        className="flex justify-center z-[1] items-center py-1 px-5 md:py-3 md:px-10 rounded-full border-[0.09375rem] border-orange-40 bg-white/80 text-orange-40 text-btn group-hover:text-black group-hover:border-black transition duration-300"
      >
        了解更多
      </Link>
    </div>
  );
};

export default PolicyCard;
