import type {NextPage} from 'next';
import {useCallback} from 'react';
import {useRouter} from 'next/router';

const Frame: NextPage = () => {
  const router = useRouter();

  const onText25Click = useCallback(() => {
    // Please sync "認識候選人" to the project
  }, []);

  const onText26Click = useCallback(() => {
    // Please sync "最新活動" to the project
  }, []);

  const onText27Click = useCallback(() => {
    // Please sync "policy issues" to the project
  }, []);

  const onText28Click = useCallback(() => {
    router.push('/');
  }, [router]);

  const onText29Click = useCallback(() => {
    // Please sync "首頁" to the project
  }, []);

  const onText30Click = useCallback(() => {
    // Please sync "認識候選人" to the project
  }, []);

  const onText31Click = useCallback(() => {
    // Please sync "最新活動" to the project
  }, []);

  const onText32Click = useCallback(() => {
    // Please sync "policy issues" to the project
  }, []);

  const onText33Click = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="relative bg-blue-80 w-full h-[66.69rem] overflow-hidden text-justify text-[5rem] text-black font-footnote">
      <img
        className="absolute top-[0rem] left-[0rem] w-[90rem] h-[17.63rem] object-cover"
        alt=""
        src="/rectangle-150@2x.png"
      />
      <b className="absolute top-[-47.5rem] left-[-53.75rem] tracking-[2px] font-inter text-black1 text-left">
        美好台灣
      </b>
      <div className="absolute top-[20.63rem] left-[9.75rem] w-[27.31rem] flex flex-col items-start justify-start gap-[2rem] text-[2rem]">
        <b className="self-stretch relative">小額捐款</b>
        <div className="self-stretch flex flex-col items-start justify-start text-[1.25rem]">
          <div className="self-stretch relative leading-[2rem] font-medium">
            您的小筆捐款，是每隻毛孩未來的大大動力！
          </div>
        </div>
      </div>
      <div className="absolute top-[31.25rem] left-[9.69rem] w-[70.63rem] flex flex-col items-start justify-start gap-[1.06rem] text-[1.13rem]">
        <b className="relative leading-[2rem] inline-block w-[41.75rem]">捐款方案：</b>
        <div className="self-stretch flex flex-row items-start justify-between text-center text-[0.31rem]">
          <div className="rounded-xl bg-gray w-[16.25rem] flex flex-col items-center justify-start py-[1.5rem] px-[0rem] box-border gap-[1rem]">
            <div className="relative w-[5.5rem] h-[5.5rem] text-dimgray-200">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group.svg"
                  />
                  <img
                    className="absolute h-[41.79%] w-[30.43%] top-[35.31%] right-[35.08%] bottom-[22.9%] left-[34.49%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group1.svg"
                  />
                  <div className="absolute top-[1.41rem] left-[1.69rem] h-[0.32rem] flex flex-row items-center justify-start gap-[0.13rem]">
                    <div className="relative box-border w-[0.41rem] h-[0.03rem] border-t-[0.5px] border-solid border-dimgray-200" />
                    <b className="relative tracking-[1px] leading-[0.31rem]">鬥小將</b>
                    <div className="relative box-border w-[0.41rem] h-[0.03rem] border-t-[0.5px] border-solid border-dimgray-200" />
                  </div>
                </div>
              </div>
              <img
                className="absolute h-[33.29%] w-[70.45%] top-[32.95%] right-[14.77%] bottom-[33.76%] left-[14.77%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-75.svg"
              />
            </div>
            <b className="self-stretch relative text-[1.5rem] tracking-[2px]">鬥小將</b>
            <div className="self-stretch flex flex-col items-center justify-start gap-[0.25rem] text-[1.13rem]">
              <div className="self-stretch relative leading-[2rem]">捐款新台幣600元</div>
              <div className="self-stretch relative text-[0.94rem] leading-[1.31rem] text-gray-40">
                已有 9957 人贊助
              </div>
            </div>
            <div className="rounded-31xl bg-orange-40 flex flex-row items-center justify-center py-[0.75rem] px-[2.5rem] text-justify text-[0.88rem] text-gray">
              <b className="relative leading-[1.5rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                我要捐款
              </b>
            </div>
          </div>
          <div className="rounded-xl bg-gray w-[16.25rem] flex flex-col items-center justify-start py-[1.5rem] px-[0rem] box-border gap-[1rem]">
            <div className="relative w-[5.5rem] h-[5.5rem] text-dimgray-200">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group2.svg"
              />
              <img
                className="absolute h-[41.79%] w-[30.43%] top-[35.31%] right-[35.08%] bottom-[22.9%] left-[34.49%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group3.svg"
              />
              <img
                className="absolute top-[0.73rem] left-[0.69rem] w-[4.09rem] h-[4.09rem]"
                alt=""
                src="/group-72.svg"
              />
              <div className="absolute top-[1.41rem] left-[1.69rem] h-[0.32rem] flex flex-row items-center justify-start gap-[0.13rem]">
                <div className="relative box-border w-[0.41rem] h-[0.03rem] border-t-[0.5px] border-solid border-dimgray-200" />
                <b className="relative tracking-[1px] leading-[0.31rem]">鬥之星</b>
                <div className="relative box-border w-[0.41rem] h-[0.03rem] border-t-[0.5px] border-solid border-dimgray-200" />
              </div>
            </div>
            <b className="self-stretch relative text-[1.5rem] tracking-[2px]">鬥之星</b>
            <div className="self-stretch flex flex-col items-center justify-start gap-[0.25rem] text-[1.13rem]">
              <div className="self-stretch relative leading-[2rem]">捐款新台幣6,000元</div>
              <div className="self-stretch relative text-[0.94rem] leading-[1.31rem] text-gray-40">
                已有 2000 人贊助
              </div>
            </div>
            <div className="rounded-31xl bg-orange-40 flex flex-row items-center justify-center py-[0.75rem] px-[2.5rem] text-justify text-[0.88rem] text-gray">
              <b className="relative leading-[1.5rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                我要捐款
              </b>
            </div>
          </div>
          <div className="rounded-xl bg-gray w-[16.25rem] flex flex-col items-center justify-start py-[1.5rem] px-[0rem] box-border gap-[1rem]">
            <div className="relative w-[5.5rem] h-[5.5rem] text-dimgray-200">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group4.svg"
                />
                <img
                  className="absolute h-[41.79%] w-[30.43%] top-[35.31%] right-[35.08%] bottom-[22.9%] left-[34.49%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group5.svg"
                />
                <div className="absolute top-[1.41rem] left-[1.69rem] h-[0.32rem] flex flex-row items-center justify-start gap-[0.13rem]">
                  <div className="relative box-border w-[0.41rem] h-[0.03rem] border-t-[0.5px] border-solid border-dimgray-200" />
                  <b className="relative tracking-[1px] leading-[0.31rem]">鬥傳奇</b>
                  <div className="relative box-border w-[0.41rem] h-[0.03rem] border-t-[0.5px] border-solid border-dimgray-200" />
                </div>
              </div>
              <img
                className="absolute h-[71.59%] w-[71.59%] top-[14.77%] right-[14.77%] bottom-[13.64%] left-[13.64%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
            </div>
            <b className="self-stretch relative text-[1.5rem] tracking-[2px]">鬥傳奇</b>
            <div className="self-stretch flex flex-col items-center justify-start gap-[0.25rem] text-[1.13rem]">
              <div className="self-stretch relative leading-[2rem]">捐款新台幣60,000元</div>
              <div className="self-stretch relative text-[0.94rem] leading-[1.31rem] text-gray-40">
                已有 999 人贊助
              </div>
            </div>
            <div className="rounded-31xl bg-orange-40 flex flex-row items-center justify-center py-[0.75rem] px-[2.5rem] text-justify text-[0.88rem] text-gray">
              <b className="relative leading-[1.5rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                我要捐款
              </b>
            </div>
          </div>
          <div className="rounded-xl bg-gray w-[16.25rem] flex flex-col items-center justify-start py-[1.5rem] px-[0rem] box-border gap-[1rem]">
            <div className="relative w-[5.5rem] h-[5.5rem] text-dimgray-200">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group6.svg"
              />
              <img
                className="absolute h-[41.79%] w-[30.43%] top-[35.31%] right-[35.08%] bottom-[22.9%] left-[34.49%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group7.svg"
              />
              <div className="absolute top-[1.41rem] left-[1.69rem] h-[0.32rem] flex flex-row items-center justify-start gap-[0.13rem]">
                <div className="relative box-border w-[0.41rem] h-[0.03rem] border-t-[0.5px] border-solid border-dimgray-200" />
                <b className="relative tracking-[1px] leading-[0.31rem]">鬥之友</b>
                <div className="relative box-border w-[0.41rem] h-[0.03rem] border-t-[0.5px] border-solid border-dimgray-200" />
              </div>
            </div>
            <b className="self-stretch relative text-[1.5rem] tracking-[2px]">鬥之友</b>
            <div className="self-stretch flex flex-col items-center justify-start gap-[0.25rem] text-[1.13rem]">
              <div className="self-stretch relative leading-[2rem]">自訂贊助金額</div>
              <div className="self-stretch relative text-[0.94rem] leading-[1.31rem]">
                已有 9957 人贊助
              </div>
            </div>
            <div className="rounded-31xl bg-orange-40 flex flex-row items-center justify-center py-[0.75rem] px-[2.5rem] text-justify text-[0.88rem] text-gray">
              <b className="relative leading-[1.5rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                我要捐款
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0rem] left-[0rem] w-[90rem] flex flex-row items-center justify-start py-[1.5rem] px-[2.5rem] box-border text-[1rem] text-blue-30">
        <div className="flex flex-row items-center justify-start gap-[2.5rem] z-[0]">
          <img className="relative w-[2.52rem] h-[3.47rem]" alt="" src="/group8.svg" />
          <div className="flex flex-row items-start justify-start gap-[2rem]">
            <div className="relative leading-[1.5rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              首頁
            </div>
            <div
              className="relative leading-[1.5rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] cursor-pointer"
              onClick={onText25Click}
            >
              認識候選人
            </div>
            <div
              className="relative leading-[1.5rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] cursor-pointer"
              onClick={onText26Click}
            >
              最新活動
            </div>
            <div
              className="relative leading-[1.5rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] cursor-pointer"
              onClick={onText27Click}
            >
              政策議題
            </div>
            <div
              className="relative leading-[1.5rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] cursor-pointer"
              onClick={onText28Click}
            >
              小額捐款
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0rem] left-[0rem] bg-white box-border w-[90rem] flex flex-col items-center justify-start py-[2rem] px-[0rem] text-left text-[0.94rem] text-dimgray-100 border-t-[1px] border-solid border-gray-60">
        <div className="w-[85rem] flex flex-row items-end justify-between">
          <div className="relative leading-[1.31rem]">
            <p className="m-0">2023 鬥立翰 版權所有。</p>
            <p className="m-0">
              辦公室地址｜毛孩區，毛茸茸大道99號，狗狗大厦99樓　Tel｜(02)
              888-5678　Email｜dogoffice@doglihan.tw
            </p>
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.5rem] text-gray-30">
            <div className="relative leading-[1.31rem] cursor-pointer" onClick={onText29Click}>
              首頁
            </div>
            <div className="relative leading-[1.31rem] cursor-pointer" onClick={onText30Click}>
              認識候選人
            </div>
            <div className="relative leading-[1.31rem] cursor-pointer" onClick={onText31Click}>
              最新活動
            </div>
            <div className="relative leading-[1.31rem] cursor-pointer" onClick={onText32Click}>
              政策議題
            </div>
            <div className="relative leading-[1.31rem] cursor-pointer" onClick={onText33Click}>
              小額捐款
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
