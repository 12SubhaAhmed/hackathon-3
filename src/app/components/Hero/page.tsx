import Image from "next/image";

export default function Hero() {
    return (
      <div className="sm:w-[1440px] sm:top-[124px] bg-[#f6f7f9]">
        <div className="flex flex-col mt-[32px] ml-[64px] space-y-8">
          {/* Single row for ad1 and ad2 */}
          <div className="ads1 flex justify-between items-center space-x-">
            <div className="w-[372px] sm:w-[640px] h-[209px] sm:h-[360px] hover:shadow-[0_0_4px_1px_black] transition-all">
              <Image 
              src="/Images/Ads1.png" 
              alt="Ads1"
              width={900}
              height={900}
              />
            </div>
            <div className="ads2 hidden md:block w-[640px] h-[360px] hover:shadow-[0_0_4px_1px_black] transition-all">
              <Image 
              src="/Images/Ads2.png" 
              alt="Ads2"
              width={900}
              height={900}
              />
            </div>
          </div>
        </div> 
      </div>
    );
  }
  