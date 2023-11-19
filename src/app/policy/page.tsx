'use client';
import Image from 'next/image';
import Link from 'next/link';
import {Fragment, useEffect, useRef, useState} from 'react';

import {isMobile} from 'react-device-detect';

import ArrowDown from '@/components/ui/icons/ArrowDown';
import ArrowRight from '@/components/ui/icons/ArrowRight';
import ArrowUp from '@/components/ui/icons/ArrowUp';
import DogFinger from '@/components/ui/icons/DogFinger';

import featureBG01 from '/public/images/featureBG01.jpeg';
import featureBG02 from '/public/images/featureBG02.jpeg';
import featureBG03 from '/public/images/featureBG03.jpeg';
import featureBG04 from '/public/images/featureBG04.jpeg';
import patten01 from '/public/images/patten01.svg';
import patten02 from '/public/images/patten02.svg';
import patten03 from '/public/images/patten03.svg';
import patten04 from '/public/images/patten04.svg';
import subHeroTitle from '/public/images/subHero_title.svg';
import subHeroTitleMd from '/public/images/subHero_title_md.svg';

const policyList = [
  {
    id: 1,
    title: '為毛孩子謀福利！\n推動寵物醫療保障方案',
    image: featureBG01,
    patten: patten01,
    list: [
      '設立寵物醫療基金：每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用',
      '提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力',
      '合作動物醫院：目前已有和超過 200 家動物醫院進行初步的合作討論',
    ],
  },
  {
    id: 2,
    title: '打造休閒天堂！\n推廣寵物休閒與娛樂場所',
    image: featureBG02,
    patten: patten02,
    list: [
      '建立寵物公園：每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園',
      '推廣寵物友善商家：鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫',
      '舉辦寵物活動和工作坊：與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等',
    ],
  },
  {
    id: 3,
    title: '讓愛更專業！\n推廣寵物飼養教育',
    image: featureBG03,
    patten: patten03,
    list: [
      '建立寵物飼養教育中心：每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心',
      '推廣寵物飼養課程：與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益',
      '製作教育資料：出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識',
    ],
  },
  {
    id: 4,
    title: '反對外貌歧視！\n破除寵物刻板印象',
    image: featureBG04,
    patten: patten04,
    list: [
      '建立狗狗友善宣導機制：每年撥款新台幣 5 千萬元，在流浪狗之家及動物醫院利用網站及宣傳物，建立正確的知識體系，宣導並破除對狗狗長相的刻板印象。',
      '舉辦黑狗選美大會：每年撥款新台幣 2 億元，透過選美大賽破除黑狗的傳統印象，提升對黑狗的重視度。',
      '組織人道救援志工：培養志工團隊協助流浪狗轉換形象，出版宣導手冊和影片宣導流浪狗等相關知識，輔導流浪狗重新適應與人類生活的模式，並協助接洽寵物國際領養系統。',
    ],
  },
];

const PolicyIssues = () => {
  const [currentPolicy, setCurrentPolicy] = useState(1);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (isManualScroll) return;
    let newCurrentPolicy = currentPolicy;
    policyList.forEach((policy) => {
      const section = document.getElementById(`policy-${policy.id}`);
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        const sectionCenter = sectionRect.top + sectionRect.height / 2;

        // 檢查節點是否至少部分位於可視範圍內
        if (sectionCenter >= 0 && sectionCenter <= window.innerHeight) {
          newCurrentPolicy = policy.id;
        }
      }
    });
    setCurrentPolicy(newCurrentPolicy);
  };
  useEffect(() => {
    const mainElement = mainRef.current;
    if (mainElement) {
      const interval = setInterval(handleScroll, 100);

      return () => {
        clearInterval(interval);
        mainElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);

  const handleUpPage = () => {
    if (currentPolicy === 1) return;
    const newPolicy = currentPolicy - 1;
    setCurrentPolicy(newPolicy);
    scrollToSection(newPolicy);
  };

  const handleDownPage = () => {
    if (currentPolicy === policyList.length) return;
    const newPolicy = currentPolicy + 1;
    setCurrentPolicy(newPolicy);
    scrollToSection(newPolicy);
  };

  const scrollToSection = (policyId: number) => {
    setIsManualScroll(true);
    const section = document.getElementById(`policy-${policyId}`);
    if (section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
    setTimeout(() => {
      setIsManualScroll(false);
    }, 1000); // 假設滾動完成需要1秒
  };

  return (
    <main
      ref={mainRef}
      className="relative max-h-[87.5svh] overflow-y-scroll bg-blue-80 md:snap-y md:snap-mandatory scroll-smooth"
    >
      {policyList.map((policy, index) => (
        <section
          id={`policy-${policy.id}`}
          key={policy.id}
          className="flex flex-col w-full md:h-[87.5svh] md:flex-row md:snap-start"
        >
          <div
            className="relative flex-auto h-[50vh] bg-cover bg-center bg-no-repeat md:h-full md:w-1/2 md:flex-shrink-0"
            style={{
              backgroundImage: `url(${policy.image.src})`,
            }}
          >
            <div className="absolute left-6 bottom-6 z-[1] md:left-10 md:bottom-10">
              <div className="relative h-[3.625rem] w-[15.1875rem] md:w-[13.25rem] md:h-[13.25rem]">
                <Image
                  fill
                  src={isMobile ? subHeroTitle.src : subHeroTitleMd.src}
                  alt="policy title"
                />
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center px-6 py-12 bg-[right_center] bg-no-repeat bg-auto md:px-15"
            style={{
              backgroundImage: `url(${policy.patten.src})`,
            }}
          >
            <div className="flex flex-col justify-center min-h-[41.6875rem]">
              <h2 className="flex items-center gap-1 text-blue-30 font-bold text-[1.5rem] leading-[1.75rem] pb-4 md:text-h4">
                <DogFinger />
                政策{policy.id}
              </h2>
              <h1 className="mb-10 text-h3 md:mb-15 md:text-h2">
                {policy.title.split('\n').map((title, index) => {
                  return index === 0 ? (
                    <Fragment key={title}>{title}</Fragment>
                  ) : (
                    <Fragment key={title}>
                      <br />
                      {title}
                    </Fragment>
                  );
                })}
              </h1>
              <ul className="flex flex-col gap-4 list-disc list-inside mb-15 md:mb-0">
                {policy.list.map((item, index) => (
                  <li key={index} className="text-blue-30">
                    <p className="inline text-black">{item}</p>
                  </li>
                ))}
              </ul>
              <div className="flex md:hidden">
                <a
                  className="flex items-center gap-1 ml-auto text-blue-30 text-footnote-bold"
                  href=""
                >
                  了解其他政策
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
      <div className="fixed hidden -translate-x-1/2 -translate-y-28 bottom-10 left-1/2 md:block">
        <div className="flex flex-col items-center justify-center w-20 h-20 gap-1 border rounded-full border-gray-40 bg-white/50">
          <Link
            className="grid w-5 h-5 cursor-pointer place-content-center"
            href={`#policy-${currentPolicy - 1}`}
            onClick={handleUpPage}
          >
            <ArrowUp />
          </Link>
          <div className="flex items-center justify-center gap-0.5">
            <span>{currentPolicy}</span> <span>/</span> <span>{policyList.length}</span>
          </div>
          <Link
            className="grid w-5 h-5 cursor-pointer place-content-center"
            href={`#policy-${currentPolicy + 1}`}
            onClick={handleDownPage}
          >
            <ArrowDown />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PolicyIssues;
