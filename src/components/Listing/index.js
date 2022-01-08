import React from "react";
import Card from "../Card";

export default function Listing({ items }) {
  function totall(curcode, prise) {
    if (curcode === "USD") {
      return "$" + prise;
    } else if (curcode === "EUR") {
      return "€" + prise;
    } else {
      return prise + " " + curcode;
    }
  }

  return (
    <div className="item-list">
      {items.map((card) => {
        return <Card card={card} totall={totall} key={card.listing_id} />;
      })}
    </div>
  );
}
