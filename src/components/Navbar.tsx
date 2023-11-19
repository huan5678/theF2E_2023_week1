'use client';

import Image from 'next/image';
import NavLink from './NavLink';
import {useEffect, useMemo, useState} from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // 新增状态来存储上一次滚动的位置

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > 20;
      const isScrollingUp = currentScrollY < lastScrollY;

      setIsScrolled(isScrollingDown);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  const linkList = useMemo(
    () => [
      {
        title: '首頁',
        href: '/',
      },
      {
        title: '認識候選人',
        href: '/about',
      },
      {
        title: '最新活動',
        href: '/event',
      },
      {
        title: '政策議題',
        href: '/policy',
      },
      {
        title: '小額捐款',
        href: '/donate',
      },
    ],
    []
  );
  return (
    <div
      className={`${
        isScrolled ? 'bg-white/50 backdrop-blur-sm' : 'bg-transparent'
      } fixed w-full z-10 flex items-center justify-between transition duration-300 md:justify-start md:gap-10 md:py-6 md:px-10`}
    >
      <div className="relative w-[1.75rem] md:w-[2.4375rem] h-[3.375rem] md:h-[2.4375rem]">
        <Image
          loading="lazy"
          src="/images/logo_nav.svg"
          className="max-w-full"
          layout="fill"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center gap-8 md:gap-2 md:flex-row">
        {linkList.map((link) => (
          <NavLink key={link.title} title={link.title} href={link.href} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
