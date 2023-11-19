import type {NextPage} from 'next';
import {useCallback} from 'react';
import {useRouter} from 'next/router';

const Frame: NextPage = () => {
  const router = useRouter();

  const onText12Click = useCallback(() => {
    // Please sync "認識候選人" to the project
  }, []);

  const onText13Click = useCallback(() => {
    router.push('/');
  }, [router]);

  const onText14Click = useCallback(() => {
    // Please sync "policy issues" to the project
  }, []);

  const onText15Click = useCallback(() => {
    // Please sync "小額捐款" to the project
  }, []);

  const onText16Click = useCallback(() => {
    // Please sync "首頁" to the project
  }, []);

  const onText17Click = useCallback(() => {
    // Please sync "認識候選人" to the project
  }, []);

  const onText18Click = useCallback(() => {
    router.push('/');
  }, [router]);

  const onText19Click = useCallback(() => {
    // Please sync "policy issues" to the project
  }, []);

  const onText20Click = useCallback(() => {
    // Please sync "小額捐款" to the project
  }, []);

  return (
    <div className="relative bg-blue-80 w-full h-[89.75rem] overflow-hidden text-justify text-[5rem] text-blue-30 font-footnote">
      <img
        className="absolute top-[0rem] left-[0rem] w-[90rem] h-[17.63rem] object-cover"
        alt=""
        src="/rectangle-150@2x.png"
      />
      <b className="absolute top-[-47.5rem] left-[-53.75rem] tracking-[2px] font-inter text-black1 text-left">
        美好台灣
      </b>
      <div className="absolute top-[20.63rem] left-[9.75rem] w-[27.31rem] flex flex-col items-start justify-start text-[2rem] text-black">
        <b className="self-stretch relative">最新活動</b>
      </div>
      <div className="absolute top-[25.94rem] left-[9.75rem] w-[70.56rem] flex flex-col items-start justify-start gap-[3rem] text-[1.38rem]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[3.75rem]">
          <img
            className="relative rounded-lg w-[20.13rem] h-[13.81rem] object-cover"
            alt=""
            src="/rectangle-23@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
              <b className="relative tracking-[1px] leading-[2.06rem] inline-block w-[19.88rem]">
                12.26
              </b>
              <b className="self-stretch relative text-[1.5rem] tracking-[2px] text-black">
                台北寵物論壇，爭取狗狗友善環境
              </b>
            </div>
            <div className="self-stretch relative text-[1.13rem] leading-[2rem] text-black">
              炎炎夏日的周六，我帶著鬥牛犬霸氣墨鏡走進了台北寵物論壇，決定要全力宣傳「狗狗傲嬌」的理念！誰說只有貓咪有個性，狗狗也應該活出專屬自己的個性。
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-black" />
        <div className="self-stretch flex flex-row items-center justify-start gap-[3.75rem]">
          <img
            className="relative rounded-lg w-[20.13rem] h-[13.81rem] object-cover"
            alt=""
            src="/rectangle-151@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
              <b className="relative tracking-[1px] leading-[2.06rem] inline-block w-[19.88rem]">
                12.24
              </b>
              <b className="self-stretch relative text-[1.5rem] tracking-[2px] text-black">
                掃街模式開啟！鄉親父老一起來！
              </b>
            </div>
            <div className="self-stretch relative text-[1.13rem] leading-[2rem] text-black">
              街上氣氛真的很棒，從小孩到大人，雖然下起大雨，大家還是穿著雨衣來參加活動，真的太感人了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「狗狗友善環境」政策的決心。
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-black" />
        <div className="self-stretch flex flex-row items-center justify-start gap-[3.75rem]">
          <img
            className="relative rounded-lg w-[20.13rem] h-[13.81rem] object-cover"
            alt=""
            src="/rectangle-152@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
              <b className="relative tracking-[1px] leading-[2.06rem] inline-block w-[19.88rem]">
                12.20
              </b>
              <b className="self-stretch relative text-[1.5rem] tracking-[2px] text-black">
                收容所模特兒大比拼！
              </b>
            </div>
            <div className="self-stretch relative text-[1.13rem] leading-[2rem] text-black">
              今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0rem] left-[0rem] w-[90rem] flex flex-row items-center justify-start py-[1.5rem] px-[2.5rem] box-border text-[1rem]">
        <div className="flex flex-row items-center justify-start gap-[2.5rem] z-[0]">
          <img className="relative w-[2.52rem] h-[3.47rem]" alt="" src="/group.svg" />
          <div className="flex flex-row items-start justify-start gap-[2rem]">
            <div className="relative leading-[1.5rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              首頁
            </div>
            <div
              className="relative leading-[1.5rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] cursor-pointer"
              onClick={onText12Click}
            >
              認識候選人
            </div>
            <div
              className="relative leading-[1.5rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] cursor-pointer"
              onClick={onText13Click}
            >
              最新活動
            </div>
            <div
              className="relative leading-[1.5rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] cursor-pointer"
              onClick={onText14Click}
            >
              政策議題
            </div>
            <div
              className="relative leading-[1.5rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] cursor-pointer"
              onClick={onText15Click}
            >
              小額捐款
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0rem] left-[0rem] bg-white box-border w-[90rem] flex flex-col items-center justify-start py-[2rem] px-[0rem] text-left text-[0.94rem] text-dimgray border-t-[1px] border-solid border-gray-60">
        <div className="w-[85rem] flex flex-row items-end justify-between">
          <div className="relative leading-[1.31rem]">
            <p className="m-0">2023 鬥立翰 版權所有。</p>
            <p className="m-0">
              辦公室地址｜毛孩區，毛茸茸大道99號，狗狗大厦99樓　Tel｜(02)
              888-5678　Email｜dogoffice@doglihan.tw
            </p>
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.5rem] text-gray-30">
            <div className="relative leading-[1.31rem] cursor-pointer" onClick={onText16Click}>
              首頁
            </div>
            <div className="relative leading-[1.31rem] cursor-pointer" onClick={onText17Click}>
              認識候選人
            </div>
            <div className="relative leading-[1.31rem] cursor-pointer" onClick={onText18Click}>
              最新活動
            </div>
            <div className="relative leading-[1.31rem] cursor-pointer" onClick={onText19Click}>
              政策議題
            </div>
            <div className="relative leading-[1.31rem] cursor-pointer" onClick={onText20Click}>
              小額捐款
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
