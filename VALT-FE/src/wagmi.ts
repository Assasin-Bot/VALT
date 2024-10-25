import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  bsc,
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    bsc,
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia
  ],
});