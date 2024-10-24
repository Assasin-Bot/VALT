import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import dateFormat  from 'dateformat';

export default function Card({_id, eventname, country,city, www, date, offerdate, type ,On_offline, gen_invvalt} : any) {

    const navigate = useNavigate();

    const handleClick = () => {
    //   Navigate to "/about" when the button is clicked
      navigate(`/detail/${_id}`);
    };
    return (
        <div className='flex w-full'>
            <button  className="w-full justify-normal items-start my-4 rounded-3xl focus:outline-none focus:ring focus:ring-greenColor" onClick={handleClick}>
                <div className="w-full sm:px-[16px] flex md:flex-col sm:flex-col p-6 gap-x-8 sm:gap-y-8 rounded-3xl bg-darkgrayBackgroundColor justify-between 
                hover:bg-[#252b3b] active:bg-[#232e3b] ">
                    <div className="flex md:flex-row sm:flex-col gap-x-8 sm:gap-y-8">
                        {/* <img src='/assets/img/section1_logo.png' className='w-[168px] h-[168px] hidden lg:block'></img> */}
                        <img src='/assets/img/logo2.png' className='w-[168px] h-[168px] block'></img>
                        <div className="flex flex-col gap-y-3 justify-start items-start">
                            <div className="flex flex-row gap-x-4 h-8">
                                <div className="px-2 rounded bg-pinkColor font-bold text-lg text-white min-w-[88px]">
                                    {/* <span className="hidden lg:block">AUG 23, 18:00 (UTC)</span> */}
                                    <span className="sm:block md:block md:text-[14px] sm:text-[13px]">{dateFormat(offerdate, 'mmmm dS')}-{dateFormat(date, 'dS')}</span>
                                </div>
                                <div className="px-2 rounded border-2 border-yellowColor  font-bold text-lg text-yellowColor">{type}</div>
                                <div className="px-2 rounded border-2 border-redColor  font-bold text-lg text-redColor">{On_offline}</div>
                            </div>

                            <div className="text-4xl leading-[36px] text-grayWhiteColor font-semibold">{eventname}</div>

                            <div className="text-[26px] leading-[24px] font-normal text-grayColor lg:block">{city} - {country}</div>

                            <a href={www} className="text-[22px] leading-[24px] font-normal text-blueTextColor">{www}</a>
                        </div>
                    </div>
                    <button className="bg-grayBackgroundColor flex rounded-3xl lg:w-[370px] w-full flex-col pt-[42px] md:mt-8 hover:bg-darkgrayBackgroundColor active:bg-[#252b3b]"  onClick={handleClick}>
                        <div className="w-full flex flex-row items-center justify-center rounded-3xl bg-transparent gap-1">
                            <img src="/assets/img/wallet_icon.png" className="w-[56px] h-[56px]" alt="wallet_icon"></img>
                            <div className="text-[38px] leading-[24px] font-semibold text-greenColor">{gen_invvalt}</div>
                        </div>
                        <div className="w-full flex items-center justify-center py-6">
                            <p className="text-[22px] sm:text-[18px] leading-[16px] font-bold text-white">BUY $VALT GET FREE INVITE</p>
                        </div>
                    </button>
                </div>
            </button>
        </div>
    )
}
