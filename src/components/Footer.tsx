import Link from 'next/link';

const Footer = () => {
  return (
    <div className="relative z-[1] flex flex-col items-center w-full px-10 py-8 bg-white border-t border-solid border-t-gray-60 max-md:max-w-full max-md:px-5">
      <div className="justify-between items-start self-center flex w-full max-w-[1360px] gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="self-end text-footnote text-gray-30 grow shrink basis-auto max-md:max-w-full">
          2023 鬥立翰 版權所有。
          <br />
          辦公室地址｜毛孩區，毛茸茸大道99號，狗狗大厦99樓　Tel｜(02)
          888-5678　Email｜dogoffice@doglihan.tw
        </div>
        <div className="self-end justify-between hidden max-w-full gap-6 md:flex">
          <Link
            href="/"
            className="transition-colors text-footnote text-gray-30 hover:text-blue-40"
          >
            首頁
          </Link>
          <Link
            href="/about"
            className="transition-colors text-footnote text-gray-30 hover:text-blue-40"
          >
            認識候選人
          </Link>
          <Link
            href="/event"
            className="transition-colors text-footnote text-gray-30 hover:text-blue-40"
          >
            最新活動
          </Link>
          <Link
            href="/policy"
            className="transition-colors text-footnote text-gray-30 hover:text-blue-40"
          >
            政策議題
          </Link>
          <Link
            href="/donate"
            className="transition-colors text-footnote text-gray-30 hover:text-blue-40"
          >
            小額捐款
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
