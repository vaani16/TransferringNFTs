import { useState } from "react";
import {
  useBuyOffers,
  useGetBuyOffers,
  useGetSellOffers,
  useSellOffers
} from "@nice-xrpl/react-xrpl";

export function Token({ id, uri }) {
  const [buyLoading, setBuyLoading] = useState(false);
  const [sellLoading, setSellLoading] = useState(false);

  // The useGetBuyOffers and useGetSellOffers hooks allow you to
  // retrieve any buy/sell offers for a token ID from the ledger.
  const getBuyOffers = useGetBuyOffers();
  const getSellOffers = useGetSellOffers();

  // The useBuyOffers and useSellOffers hooks reactively return
  // all offers.  These are updated as transactions are made.
  const buyOffers = useBuyOffers(id);
  const sellOffers = useSellOffers(id);

  return (
    <div>
      <code>{id}</code>
      {": "}
      {uri}
      {" - "}
      <button
        onClick={async () => {
          if (buyLoading || sellLoading) {
            return;
          }

          setBuyLoading(true);

          try {
            await getBuyOffers(id);
          } catch (e) {
            // console.log(e);
          } finally {
            setBuyLoading(false);
          }

          try {
            await getSellOffers(id);
          } catch (e) {
            // console.log(e);
          } finally {
            setSellLoading(false);
          }
        }}
      >
        {buyLoading ? "Waiting for response..." : "Get Offers"}
      </button>
      {buyOffers?.length ? (
        <div>
          Buy Offers
          <ul>
            {buyOffers.map((offer) => {
              return (
                <li key={offer.index}>
                  Offer Index <code>{offer.index}</code> for offer amount{" "}
                  {offer.amount}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      {sellOffers?.length ? (
        <div>
          Sell Offers
          <ul>
            {sellOffers.map((offer) => {
              return (
                <li key={offer.index}>
                  Offer Index <code>{offer.index}</code> for offer amount{" "}
                  {offer.amount}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
