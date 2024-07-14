import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="tw-text-gray-500 tw-text-[16px] sm:tw-text-2xl md:tw-text-4xl tw-font-bold tw-flex tw-flex-col tw-justify-center tw-items-center tw-h-[80vh] tw-w-full tw-gap-4">
      <span className="tw-p-5">Thank you for placing your order 🙂</span>
      <Link href={"/"} 
        className="tw-bg-orange-400 tw-border-orange-400 tw-text-white 
            hover:tw-bg-white hover:tw-border 
            hover:tw-text-orange-400  
            tw-gap-6 tw-p-5 tw-rounded-md
            tw-transition-all tw-duration-200">
        View more cars for your next trip!
      </Link> 
    </div>
  );
};

export default ThankYou;
