import React from "react";
import PropTypes from "prop-types";

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
        return (
          <div className="item" key={card.listing_id}>
            <div className="item-image">
              <a href={card.url}>
                <img
                  src={
                    card.MainImage
                      ? card.MainImage.url_570xN
                      : "https://opencartforum.com/storage/attachment/monthly_2020_06/no-img.png.056bf2e130881dec0f753ea5d0228c26.png"
                  }
                  alt={"picture " + card.title}
                />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">
                {card.title && card.title.length > 50
                  ? card.title.substr(0, 50) + "..."
                  : card.title}
              </p>
              <p className="item-price">
                {card.currency_code
                  ? totall(card.currency_code, card.price)
                  : "$0"}
              </p>
              <p
                className={
                  card.quantity <= 10 || card.quantity === undefined
                    ? "item-quantity level-low"
                    : card.quantity <= 20
                    ? " item-quantity level-medium"
                    : "item-quantity level-high"
                }
              >
                {card.quantity ? card.quantity : 0}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  ); 
}

Listing.defaultProps = {
  title: null,
  currency_code: "$",
  price: "0",
  quantity: 0,
  url_570xN:
    "https://opencartforum.com/storage/attachment/monthly_2020_06/no-img.png.056bf2e130881dec0f753ea5d0228c26.png"
};

Listing.propTypes = {
  url: PropTypes.string,
  listing_id: PropTypes.number,
  title: PropTypes.string,
  currency_code: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number
};
