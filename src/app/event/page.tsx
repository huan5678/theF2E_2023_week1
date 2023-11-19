import Image from 'next/image';

import Container from '@/components/Container';
import BG from '/public/images/eventBannerBG.jpeg';
import Event01 from '/public/images/event01.png';
import Event02 from '/public/images/event02.png';
import Event03 from '/public/images/event03.png';

const eventList = [
  {
    id: 1,
    date: '12.26',
    title: '台北寵物論壇，爭取狗狗友善環境',
    description:
      '炎炎夏日的周六，我帶著鬥牛犬霸氣墨鏡走進了台北寵物論壇，決定要全力宣傳「狗狗傲嬌」的理念！誰說只有貓咪有個性，狗狗也應該活出專屬自己的個性。',
    image: Event01,
  },
  {
    id: 2,
    date: '12.24',
    title: '掃街模式開啟！鄉親父老一起來！',
    description:
      '街上氣氛真的很棒，從小孩到大人，雖然下起大雨，大家還是穿著雨衣來參加活動，真的太感人了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「狗狗友善環境」政策的決心。',
    image: Event02,
  },
  {
    id: 3,
    date: '12.20',
    title: '收容所模特兒大比拼！',
    description:
      '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
    image: Event03,
  },
];

const EventPage = () => {
  return (
    <main>
      <section className="relative w-full h-[10.375rem] md:h-[17.63rem]">
        <div
          className="absolute w-full h-full bg-no-repeat bg-[0%_30%] bg-cover"
          style={{
            backgroundImage: `url(${BG.src})`,
          }}
        ></div>
      </section>
      <Container>
        <div className="pt-12">
          <h1 className="mb-8 text-h4">最新活動</h1>
          <div className=" [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-solid [&>*:not(:last-child)]:border-black">
            {eventList.map((event) => (
              <div
                key={event.id}
                className="flex flex-col items-start justify-start gap-8 pb-12 my-12 md:gap-15 md:flex-row md:items-center"
              >
                <div className="relative w-[20.4375rem] h-[14rem] overflow-hidden rounded-lg flex-shrink-0">
                  <Image src={event.image.src} alt="event image" fill objectFit="cover" />
                </div>

                <div className="flex flex-col justify-start">
                  <h2 className="mb-2 text-h4">
                    <span className="block text-blue-30">{event.date}</span>
                    {event.title}
                  </h2>
                  <p className="">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default EventPage;
