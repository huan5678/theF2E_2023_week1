type EventProps = {
  date: string;
  image: string;
  title: string;
  description: string;
};

const EventCard = ({date, image, title, description}: EventProps) => {
  return (
    <div className="flex items-center justify-start gap-6 md:gap-[1.875rem]">
      <img
        className="relative rounded-lg w-[6.25rem] h-[6.25rem] object-cover"
        alt={title}
        src={image}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
        <div className="flex flex-col items-start justify-start gap-1">
          <span className="tracking-[1px] leading-[1.875rem] font-bold text-blue-30 inline-block">
            {date}
          </span>
          <h4 className="text-[1.125rem] font-bold tracking-[1px] leading-[1.58rem] text-black">
            {title}
          </h4>
        </div>
        <p className="hidden md:[display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
