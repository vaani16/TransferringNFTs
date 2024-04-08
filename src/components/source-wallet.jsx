import { AcceptSellOffer } from "./wallet-ui/accept-sell-offer";
import { MintNFT } from "./wallet-ui/mint-nft";
import { SellNFT } from "./wallet-ui/sell-nft";
import { ShowNFTs } from "./wallet-ui/show-nfts";
import { WalletBalance } from "./wallet-ui/wallet-balance";
import { WalletInfo } from "./wallet-ui/wallet-info";

export function SourceWallet() {
  return (
    <div className="Wallet">
      <div className="WalletRow header">Source Wallet</div>
      <WalletInfo />
      <WalletBalance />
      <MintNFT />
      <ShowNFTs />
      <SellNFT />
      <AcceptSellOffer />
    </div>
  );
}
