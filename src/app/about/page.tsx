import type {NextPage} from 'next';

const Frame: NextPage = () => {
  return (
    <div className="relative w-full min-h-screen [background:url('/images/aboutBG.jpeg')_#D9E8FF_center_top_/_100%_no-repeat] md:[background:url('/images/aboutBG.jpeg')_#D9E8FF_368.934px_0px_/_cover_no-repeat_fixed_border-box] place-content-center md:grid md:grid-cols-12">
      <div className="absolute w-full top-[9.6rem] md:top-0 max-h-[7.5rem] md:max-w-[21.375rem] md:max-h-full h-full z-[1] md:left-[22.65rem] bg-gradient-to-t md:bg-gradient-to-r from-[#d9e8ff] to-[transparent]" />
      <div className="container md:px-0 z-[1] pt-[26.8125rem] md:pt-[12.5rem] py-12 flex flex-col items-start justify-center gap-8 text-black md:col-span-3 md:col-start-2">
        <b className="text-h4 md:text-h2">認識鬥立翰</b>
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="">
            鬥立翰在台灣這片土地長大，深感對台灣的情感。狗狗們需要人類的呵護和照顧，而狗狗也需要一位忠實的代表，一位能夠聆聽毛孩們心聲，並將這些聲音帶入立法院的代表。因此，我踏上了參選立委的征程，希望能為毛孩們帶來更好的未來。
          </p>
          <p className="">
            我堅信推動更完善的狗狗福利和相關政策，能間接地發展台灣的未來。畢竟，狗狗療育的存在能幫助改善人民身心健康，進而賺更多的錢，激發工作熱情、推動經濟，為台灣的GDP帶來巨大效益。台灣經濟發展良好，就能過上更好的生活，狗狗們也能改善生活環境，是一箭雙鵰的好事。因此，我期望能在立法院推進政策，確保狗狗和人類都能得到最大的福祉。
          </p>
          <p className="">
            護航台灣的幸福，就從照顧狗狗開始！請支持鬥立翰，讓我們攜手努力，為台灣帶來更美好的未來。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frame;
