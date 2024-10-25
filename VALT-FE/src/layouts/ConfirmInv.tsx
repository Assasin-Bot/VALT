import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import {
    useWriteContract,
} from "wagmi";

import BINANCE_PRESALE_CONTRACT_ABI from "../utils/binanceABI.json";
import BINANCE_USDT_CONTRACT_ABI from "../utils/bep20.json";
import { BINANCE_VALT_CONTRACT_ADDRESS, USDT_ADDRESS_ON_BINANCE } from "../utils";

const ConfirmInv = ({ vipb_invnum, gen_invnum, vip_invnum }: any) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [inputValue, setInputValue] = useState('');

    const { writeContractAsync } = useWriteContract();
    const handleClick = async () => {
        let approved: any = false;
        try {
            await writeContractAsync({
                abi: BINANCE_USDT_CONTRACT_ABI,
                address: USDT_ADDRESS_ON_BINANCE,
                functionName: "approve",
                args: [BINANCE_VALT_CONTRACT_ADDRESS, 3000],
            });
            approved = true;
        } catch (error: any) {
            console.error(error);
        }
        if (!approved) return;
        try {
            let hash = await writeContractAsync({
                abi: BINANCE_PRESALE_CONTRACT_ABI,
                address: BINANCE_VALT_CONTRACT_ADDRESS,
                functionName: "buyTokenWithUSDT",
                args: [3000],
            });
            console.log("Purchase Success");

        } catch (error: any) {
            console.log(error);
        }
        navigate(`/purchase/${id}`);
    };
    const handlemainpage = () => {
        navigate('/');
    };

    const handleChange = (event: any) => {
        const value = event.target.value;

        if (value.length <= 4) {
            setInputValue(value);
        }
    };

    return (
        <div className="flex w-full py-6">
            <div className="flex w-full py-5 lg:px-40">
                <div className="flex flex-col w-full bg-darkDarkColor rounded-md p-10">
                    <div className=" flex w-full justify-center items-center p-6">
                        <p className="text-[36px] leading-[24px] sm:text-[28px] font-Poppins text-white">Please confirm a deal</p>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center py-4">
                        <p className="text-[36px] leading-[24px] sm:text-[28px] font-Poppins text-white">You purchase</p>
                        <div className="w-full  flex flex-row justify-center items-center gap-[18px]">
                            <img src="/assets/img/wallet_icon.png" className="w-[62px] h-[62px] block"></img>
                            <p className="flex lg:text-[96px] md:text-[96px] sm:text-[56px] leading-[96px] font-bold text-greenColor">3 000</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center py-[25px]">
                        <p className="text-[36px] leading-[24px] sm:text-[28px] font-Poppins text-white">Your free invitation(s)</p>
                        <div className="w-full  flex flex-row justify-center items-center gap-[18px] pt-9">
                            <p className="lg:text-[96px] md:text-[96px] sm:text-[56px] leading-[96px] font-bold text-greenColor">{gen_invnum}</p>
                        </div >
                        <p className="text-[24px] leading-[32px] sm:text-[28px] font-Poppins text-white">General entrance</p>
                    </div>
                    <div className="flex flex-col justify-center items-center py-7">
                        <div className="relative flex flex-row">
                            {/* <div className="h-12 w-[156px]  pl-2 pr-2 py-2 flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent justify-between">
                                <div className="inline-flex w-8 h-8 px-auto items-center py-auto justify-between">
                                    <svg className="mx-auto" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.58366 12.2223C6.58366 13.2962 7.45422 14.1667 8.5281 14.1667H10.3337C11.4843 14.1667 12.417 13.234 12.417 12.0834C12.417 10.9328 11.4843 10.0001 10.3337 10.0001H8.66699C7.5164 10.0001 6.58366 9.06734 6.58366 7.91675C6.58366 6.76616 7.5164 5.83341 8.66699 5.83341H10.4725C11.5464 5.83341 12.417 6.70397 12.417 7.77786M9.50033 4.58341V5.83341M9.50033 14.1667V15.4167M17.8337 10.0001C17.8337 14.6025 14.1027 18.3334 9.50033 18.3334C4.89795 18.3334 1.16699 14.6025 1.16699 10.0001C1.16699 5.39771 4.89795 1.66675 9.50033 1.66675C14.1027 1.66675 17.8337 5.39771 17.8337 10.0001Z" stroke="#00CE21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <p className="pr-6 text-white">USDT</p>
                                <div className="inline-flex w-8 h-8 px-auto items-center py-auto justify-between">
                                    <svg className="mx-auto" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z" fill="#777E91"/>
                                    </svg>
                                </div>
                            </div> */}
                            <select name="coin" className="bg-gray-50 font-bold text-lg text-gray-900 ring-2 ring-greenColor focus:ring-greenColor text-sm rounded-lg block p-2.5 w-40 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white">
                                <option value="" className='text-grayTextColor'>
                                    USDT
                                </option>
                                <option value="">
                                    ETH
                                </option>
                                <option value="">
                                    BTC
                                </option>
                                <option value="">
                                    SOL
                                </option>
                                <option value="">
                                    BNB
                                </option>
                                <option value="">
                                    POL
                                </option>
                            </select>
                            <p className="text-xl leading-[48px] font-Poppins text-white px-5">3000</p>
                        </div>
                        <div className="flex flex-col w-full justify-center items-center py-4">
                            <p className="text-[18px] leading-[32px] sm:text-[28px] font-Poppins text-grayTextColor py-4">you will not be able to cancel the transaction or refuse it</p>
                            <p className="text-[18px] leading-[24px] sm:text-[28px] font-Poppins text-white py-4">Last 4 digits of your passport:</p>
                            <input type="text" value={inputValue} onChange={handleChange} className="text-grayWhiteColor text-[18px] leading-[24px] sm:text-[28px] font-Poppins h-12 w-[256px]  pl-4 pr-2 py-2 flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent justify-end">
                            </input>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <div className="flex w-full p-4 justify-center items-center">
                            <button type="submit" className="w-[184px] py-[16px] px-[24px] rounded-[90px] bg-greenColor flex justify-center items-center text-[16px] font-bold color-dark hover:bg-[#8ed6a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6e6d2]" onClick={handleClick}>CONFIRM</button>
                        </div>
                        <div className="flex w-full p-4 justify-center items-center">
                            <button className="w-[184px] py-[16px] px-[24px] rounded-[90px] bg-transparent flex justify-center items-center text-[16px] font-bold text-grayTextColor hover:bg-[#252b3b] active:bg-[#232e3b]" onClick={handlemainpage}>CANCEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmInv;