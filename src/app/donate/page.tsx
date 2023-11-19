import Image from 'next/image';

import Container from '@/components/Container';
import BG from '/public/images/donateHeaderBG.jpeg';
import Donate01 from '/public/images/badge01.svg';
import Donate02 from '/public/images/badge02.svg';
import Donate03 from '/public/images/badge03.svg';
import Donate04 from '/public/images/badge04.svg';
import {Button} from '@/components/ui/Button';

const donateList = [
  {
    id: 1,
    title: '鬥小將',
    description: '捐款新台幣600元',
    count: 9957,
    image: Donate01,
  },
  {
    id: 2,
    title: '鬥之星',
    description: '捐款新台幣6000元',
    count: 2000,
    image: Donate02,
  },
  {
    id: 3,
    title: '鬥傳奇',
    description: '捐款新台幣60,000元',
    count: 999,
    image: Donate03,
  },
  {
    id: 4,
    title: '鬥之友',
    description: '自訂贊助金額',
    count: 0,
    image: Donate04,
  },
];

const DonatePage = () => {
  return (
    <main>
      <section className="relative w-full h-[10.375rem] md:h-[17.63rem]">
        <div
          className="absolute w-full h-full bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${BG.src})`,
          }}
        ></div>
      </section>
      <Container>
        <div className="flex flex-col gap-8 py-12 md:mb-10">
          <h1 className="text-h4">小額捐款</h1>
          <p className="text-base-lg">您的小筆捐款，是每隻毛孩未來的大大動力！</p>
          <div>
            <p className="mb-4 text-base-bold">捐款方案：</p>
            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
              {donateList.map((donate) => (
                <div
                  key={donate.id}
                  className="md:w-[16.25rem] flex flex-col items-center justify-center gap-4 py-6 bg-white rounded-[1.25rem]"
                >
                  <div className="relative w-20 h-20">
                    <Image src={donate.image.src} alt="donate image" fill objectFit="cover" />
                  </div>
                  <h2 className="text-h3">{donate.title}</h2>
                  <p className="text-center">
                    {donate.description}
                    <span className="block text-gray-40 text-footnote">
                      已有{donate.count}人贊助
                    </span>
                  </p>
                  <Button size={'lg'}>我要捐款</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default DonatePage;
