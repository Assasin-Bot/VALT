
import React, { useState } from 'react';
import MetaMaskSDK from '@metamask/sdk';

const CustomMetaMaskButton: React.FC = () => {
    const [account, setAccount] = useState<string | null>(null);

    const connectWallet = async () => {
        try {
        const MMSDK = new MetaMaskSDK();
        const ethereum = MMSDK.getProvider();

        if (ethereum) {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' }) as string[];
            setAccount(accounts[0]);
        } 
        else {
            alert('MetaMask is not installed. Please install it to use this app.');
        }
        } catch (error) {
        console.error('Error connecting to MetaMask:', error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <button
                className="bg-transparent hover:bg-darkgrayBackgroundColor text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300 ease-in-out"
                onClick={connectWallet}
            >
                {account ? `Connected: ${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 'Connect with MetaMask'}
            </button>
        </div>
    );
};

export default CustomMetaMaskButton;