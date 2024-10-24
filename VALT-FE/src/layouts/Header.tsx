import { useNavigate } from "react-router-dom";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
    useAccount,
    useBalance
} from "wagmi";
import { useEffect, useState } from "react";
import { VALT_Token_Address, USDT_Token_Address, ETH_Token_Address, BTC_Token_Address } from "../utils";

const Header = () => {
    const [valtBalance, setValtBalance] = useState<number | undefined>(undefined);
    const [usdtBalance, setUsdtBalance] = useState<number | undefined>(undefined);
    const [ethBalance, setEthBalance] = useState<number | undefined>(undefined);
    const [btcBalance, setBtcBalance] = useState<number | undefined>(undefined);

    const { address } = useAccount();

    const { data: valtData } = useBalance({
        address: address,
        token: VALT_Token_Address
    });

    const { data: usdtData } = useBalance({
        address: address,
        token: USDT_Token_Address
    });

    const { data: ethData } = useBalance({
        address: address,
        token: ETH_Token_Address
    });

    const { data: btcData } = useBalance({
        address: address,
        token: BTC_Token_Address
    });

    useEffect(() => {
        if (valtData) setValtBalance(Number(valtData.formatted));
        if (usdtData) setUsdtBalance(Number(usdtData.formatted));
        if (ethData) setEthBalance(Number(ethData.formatted));
        if (btcData) setBtcBalance(Number(btcData.formatted));
    }, [valtData, usdtData, ethData, btcData]);

    const navigate = useNavigate();
    const handleClick = () => {
        // Navigate to "/about" when the button is clicked
        navigate('/');
    };

    return (
        <>
            <div className="relative justify-center text-white w-full lg:py-[20px] lg:px-[80px] sm:py-[24px] sm:px-[32px] md:py-[24px] md:px-[32px] flex flex-row gap-9 items-center border-grayBackgroundColor border-x-0 border-y-2">
                <button onClick={handleClick}><img src="/assets/img/Logo.png" className="w-[72px] h-[60px]" alt="Logo"></img></button>
                <div className="border border-grayBackgroundColor h-[50px] sm:hidden"></div>
                <div className="flex flex-wrap-reverse justify-between w-full items-center gap-x-0 gap-y-3">

                    <div className="flex flex-row items-center sm:hidden md:order-1">
                        <img src="/assets/img/valt.png" className="w-10 h-10" alt="VALT"></img>
                        <p className="ml-[10px] text-[12px] font-bold text-greyfont">$VALT</p>
                        <p className="pl-6 text-[20px] md:text-[14px] font-semibold">
                            {!valtBalance ? "0" : Number(valtBalance) / 10 ** 6}
                        </p>
                    </div>
                    <div className="flex flex-row items-center sm:hidden">
                        <img src="/assets/img/USDT.png" className="w-10 h-10" alt="USDT"></img>
                        <p className="ml-[10px] text-[12px] font-bold text-greyfont">$USDT</p>
                        <p className="pl-6  text-[18px] md:text-[12px] font-semibold">
                            {!usdtBalance ? "0" : Number(usdtBalance) / 10 ** 6}
                        </p>
                    </div>

                    <div className="flex flex-row items-center sm:hidden">
                        <img src="/assets/img/BTC.png" className="w-10 h-10" alt="BTC"></img>
                        <p className="ml-[10px] text-[12px] font-bold text-greyfont">$BtC</p>
                        <p className="pl-6  text-[18px] md:text-[12px] font-semibold">
                            {!btcBalance ? "0" : Number(btcBalance) / 10 ** 6}
                        </p>
                    </div>

                    <div className="flex flex-row items-center sm:hidden">
                        <img src="/assets/img/Eth.png" className="w-10 h-10" alt="ETH"></img>
                        <p className="ml-[10px] text-[12px] font-bold text-greyfont">$ETH</p>
                        <p className="pl-6  text-[18px] md:text-[12px] font-semibold">
                            {!ethBalance ? "0" : Number(ethBalance) / 10 ** 6}
                        </p>
                    </div>

                </div>

                {/* Add flex-shrink-0 to prevent shrinking */}
                {/* <button className="sm:absolute md:hidden border-2 rounded-full py-[12px] px-[16px] w-[93px] h-10 flex-shrink-0 items-center flex justify-center border-grayColor">
                    En
                </button> */}
                {/* <i  mg src="/assets/img/Connect_metamask_Click.png" className="w-[172px] h-[33px] md:hidden sm:hidden" alt="Connect Metamask"></i> */}
                <div className="pr-5"><div className="w-[235px] h-[40px] items-center justify-center  md:hidden sm:hidden"><ConnectButton /></div></div>
                <div className="hidden sm:block w-[21.3px] h-[10.6px] border-y-2 border-grayBackgroundColor  flex-shrink-0 "></div>

            </div>
            <div className="flex flex-row gap-9 mt-5 px-[32px] text-white float-right">

                {/* <button className="rounded-full border-2 py-[12px] px-[16px] w-[93px] h-10 items-center flex justify-center border-grayColor xl:hidden sm:hidden lg:hidden">
                    En
                </button> */}
                <div className="pr-16"><div className="w-[235px] h-[40px] items-center justify-center xl:hidden sm:hidden lg:hidden"><ConnectButton /></div></div>
            </div>
        </>
    )
}

export default Header
