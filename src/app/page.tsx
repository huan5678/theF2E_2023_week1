import Image from 'next/image';
import {isMobile} from 'react-device-detect';

import EventCard from '@/components/EventCard';
import PolicyCard from '@/components/PolicyCard';
import Container from '@/components/Container';
import {Button} from '@/components/ui/Button';
import {Label} from '@/components/ui/Label';
import {Input} from '@/components/ui/Input';
import {Textarea} from '@/components/ui/Textarea';
import SwiperContainer from '@/components/SwiperContainer';

import featureBg01 from '/public/images/featureBG01.jpeg';
import featureBg02 from '/public/images/featureBG02.jpeg';
import featureBg03 from '/public/images/featureBG03.jpeg';
import featureBg04 from '/public/images/featureBG04.jpeg';

import imageItem01 from '/public/images/imageItem01.jpeg';
import imageItem02 from '/public/images/imageItem02.jpeg';
import imageItem03 from '/public/images/imageItem03.jpeg';
import imageItem04 from '/public/images/imageItem04.jpeg';
import imageItem05 from '/public/images/imageItem05.jpeg';
import imageItem06 from '/public/images/imageItem06.jpeg';
import imageItem07 from '/public/images/imageItem07.jpeg';
import imageItem08 from '/public/images/imageItem08.jpeg';
import imageItem09 from '/public/images/imageItem09.jpeg';
import imageItem10 from '/public/images/imageItem10.jpeg';
import Banner from '/public/images/banner.jpeg';
import Logo from '/public/images/logo.svg';

const eventList = [
  {
    id: 1,
    date: '12.26',
    image: 'images/event01.png',
    title: '台北寵物論壇，爭取狗狗友善環境',
    description:
      '炎炎夏日的周六，我帶著鬥牛犬霸氣墨鏡走進了台北寵物論壇，決定要全力宣傳「狗狗傲嬌」的理念！誰說只有貓咪有個性，狗狗也應該活出專屬自己的個性。',
  },
  {
    id: 2,
    date: '12.24',
    image: 'images/event02.png',
    title: '掃街模式開啟！鄉親父老一起來！',
    description:
      '街上氣氛真的很棒，從小孩到大人，雖然下起大雨，大家還是穿著雨衣來參加活動，真的太感人了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「狗狗友善環境」政策的決心。',
  },
  {
    id: 3,
    date: '12.20',
    image: 'images/event03.png',
    title: '收容所模特兒大比拼！',
    description:
      '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
  },
];
const policyList = [
  {
    id: 1,
    image: featureBg01,
    title: '為毛孩子謀福利！<br />推動寵物醫療保障方案',
    link: '/policy?id=1',
  },
  {
    id: 2,
    image: featureBg02,
    title: '打造休閒天堂！<br />推廣寵物休閒與娛樂場所',
    link: '/policy?id=2',
  },
  {
    id: 3,
    image: featureBg03,
    title: '讓愛更專業！<br />推廣寵物飼養教育',
    link: '/policy?id=3',
  },
  {
    id: 4,
    image: featureBg04,
    title: '反對外貌歧視！<br />破除寵物刻板印象',
    link: '/policy?id=4',
  },
];

const galleryList = [
  {
    id: 1,
    image: imageItem01,
  },
  {
    id: 2,
    image: imageItem02,
  },
  {
    id: 3,
    image: imageItem03,
  },
  {
    id: 4,
    image: imageItem04,
  },
  {
    id: 5,
    image: imageItem05,
  },
  {
    id: 6,
    image: imageItem06,
  },
  {
    id: 7,
    image: imageItem07,
  },
  {
    id: 8,
    image: imageItem08,
  },
  {
    id: 9,
    image: imageItem09,
  },
  {
    id: 10,
    image: imageItem10,
  },
];

export default function Home() {
  return (
    <>
      <div className="container pb-10 md:pb-15">
        <Container className="flex flex-col gap-10 md:gap-20">
          <div className="h-screen max-h-[50.6875rem] flex">
            <div className="relative w-[40%] flex flex-col items-start justify-center gap-6 z-[1]">
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="relative w-[20.3125rem] h-[6.75rem] md:w-[36.125rem] md:h-[12.0625rem]">
                  <Image className="" layout="fill" alt="" src="/images/hero_title.svg" />
                </div>
                <b className="relative leading-[2rem]">
                  <p className="m-0">我是鬥立翰，堅守正義、追求共融，</p>
                  <p className="m-0">望與人類共同塑造更美好的明天。</p>
                </b>
              </div>
              <Button variant="secondary" size="lg">
                認識候選人
              </Button>
              <div className="absolute bottom-0 right-0 w-[12.3125rem] h-[12.3125rem] translate-x-10 -translate-y-10">
                <a href="/donate" title="小額捐款">
                  <Image layout="fill" className="" alt="Donate" src="/images/donateBtn_lg.svg" />
                </a>
              </div>
            </div>
            <div className="relative w-[60%] overflow-hidden bg-blue-40 rounded-b-[2.8125rem]">
              <div className="absolute left-[5.6875rem] bottom-0 w-full h-full">
                <Image layout="fill" objectFit="cover" alt="" src="/images/hero_image.png" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col justify-start gap-8 md:max-w-[39.375rem]">
              <div className="relative flex flex-col items-end justify-between bg-white rounded-[0.63rem] md:rounded-[1.25rem] md:flex-row py-[1.875rem] px-[1.25rem] md:px-10 md:py-15">
                <Image
                  className="absolute top-6 left-[19.8125rem] hidden md:block z-0"
                  width={177}
                  height={241}
                  alt=""
                  src={Logo.src}
                />
                <div className="flex flex-col items-start justify-start gap-6 z-[1]">
                  <h3 className="text-h4">小額捐款</h3>
                  <p className="tracking-normal text-base-lg text-orange-40">
                    您的小筆捐款，
                    <br />
                    是每隻毛孩未來的大大動力！
                  </p>
                  <span className="inline-block text-footnote-small text-gray-40">
                    目前小額贊助總金額：987,655,873
                  </span>
                </div>
                <Button size="lg" className="z-[1]">
                  我要捐款
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start text-justify text-[1.13rem]">
                <div className="flex flex-col items-start justify-start gap-2">
                  <h3 className=" text-blue-30">
                    <span className="text-[1.75rem] font-black">鬥立翰</span>
                    <span className="font-medium">（Dog Li-Han）</span>
                  </h3>
                  <div className="">
                    我堅信推動更完善的狗狗福利和相關政策，能間接地發展台灣的未來。畢竟，狗狗療育的存在能幫助改善人民身心健康，進而賺更多的錢，激發工作熱情、推動經濟，為台灣的GDP帶來巨大效益。
                  </div>
                  <div className="">
                    因此，我期望能在立法院推進政策，確保狗狗和人類都能得到最大的福祉。護航台灣的幸福，就從照顧狗狗開始！
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-6 text-justify text-[2rem]">
              <h2 className="text-h2">最新活動</h2>
              <div className="w-[27.38rem] flex flex-col items-start justify-start gap-6 text-[1.5rem]">
                {eventList.map((event, index) => (
                  <>
                    <EventCard
                      key={event.id}
                      title={event.title}
                      date={event.date}
                      description={event.description}
                      image={event.image}
                    />
                    {(index % 2 !== 0 || index === 0) && (
                      <div className="relative w-full box-border h-px border-t-[1px] border-solid border-black" />
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div
        className="w-full h-[9.75rem] md:h-[17.4375rem] relative flex flex-col justify-center"
        style={{
          backgroundImage: `url(${Banner.src})`,
          backgroundSize: '50%',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#EFEFEF',
        }}
      >
        <Container>
          <div
            className="absolute h-full w-[13.6875rem] top-0 left-1/2 z-[0]"
            style={{
              background: `linear-gradient(90deg, #EFEFEF 0%, rgba(239, 239, 239, 0.00) 100%)`,
            }}
          />
          <img
            src={`${isMobile ? '/images/bannerTitle.svg' : '/images/bannerTitle_md.svg'}`}
            alt="banner"
            className="relative z-[2]"
          />
        </Container>
      </div>
      <div className="py-10 bg-white md:py-20">
        <Container>
          <section className="flex flex-col items-start justify-start gap-6">
            <h2 className="text-h2">政策議題</h2>
            <div className="flex flex-row flex-wrap items-start justify-start w-full gap-6 text-center">
              {policyList.map((policy) => (
                <PolicyCard
                  key={policy.id}
                  className={`relative overflow-hidden flex-auto w-full md:w-[calc(50%-0.75rem)] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-white before:bg-opacity-60 hover:before:bg-orange-50 hover:before:bg-opacity-70 before:z-0 before:transition-all before:duration-300 before:ease-in-out`}
                  title={policy.title}
                  link={policy.link}
                  style={{
                    backgroundImage: `url(${policy.image.src})`,
                  }}
                />
              ))}
            </div>
          </section>
        </Container>
      </div>
      <div className="bg-gradient-to-b from-white from-50% to-[50.1%] to-blue-80">
        <SwiperContainer galleryList={galleryList} />
      </div>
      <section className="container pt-10 pb-12 md:grid md:grid-cols-12 md:py-15">
        <form className="flex flex-col items-start justify-start gap-10 md:col-start-4 md:col-span-7">
          <div className="flex flex-col items-start justify-start gap-6">
            <h2 className="text-h2 md:mb-6">民眾服務信箱</h2>
            <div className="flex flex-col items-start justify-start gap-2">
              <h3 className="text-base-bold">您的聲音，我們的行動！</h3>
              <p>
                今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start w-full">
            <div className="flex flex-row items-center justify-start gap-6 mb-2">
              <Label className="w-[4.5rem] md:w-[5.625rem] text-base" htmlFor="peopleName">
                姓名
              </Label>
              <Input
                id="peopleName"
                type="text"
                className="bg-white md:max-w-[15.125rem]"
                placeholder="請輸入您的姓名"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-6 mb-2">
              <Label className="w-[4.5rem] md:w-[5.625rem] text-base" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="bg-white md:max-w-[15.125rem]"
                placeholder="請輸入您的Email"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-6 mb-2">
              <Label className="w-[4.5rem] md:w-[5.625rem] text-base" htmlFor="phone-1">
                手機
              </Label>
              <div className="flex gap-2">
                <Input
                  id="phone-1"
                  type="tel"
                  className="bg-white max-w-[3.5rem]"
                  placeholder="0900"
                  maxLength={4}
                />
                <Input
                  id="phone-2"
                  type="tel"
                  className="bg-white md:max-w-[11.125rem]"
                  placeholder="000000"
                  maxLength={6}
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-6 mb-8 md:mb-10">
              <Label className="w-[4.5rem] md:w-[5.625rem] text-base" htmlFor="message">
                您的建言
              </Label>
              <Textarea
                id="message"
                className="bg-white md:max-w-[41.8125rem]"
                rows={5}
                placeholder="請輸入您的建言或問題"
              />
            </div>
            <Button className="ms-auto py-[0.375rem]" type="submit" variant={'submit'}>
              送出意見
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
