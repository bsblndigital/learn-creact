import React from "react";
import Icon from "@mdi/react";
import { mdiCurrencyEur, mdiCurrencyInr } from "@mdi/js";
import classNames from "classnames";

import "./CurrencyFormat.scss";

const currenyCodeIconMap = {
  INR: mdiCurrencyInr,
  EURO: mdiCurrencyEur
};

const currencyCodeLocaleMap = {
  INR: "en-IN",
  EURO: "en-EN"
};

function CurrencyFormat({
  className,
  value,
  currencyCode,
  iconSize = 1,
  ...remainingProps
}) {
  return (
    <div
      className={classNames("currency-format", { [className]: className })}
      {...remainingProps}
    >
      <Icon size={iconSize} path={currenyCodeIconMap[currencyCode]} />
      <span className="currency-format__value">
        {value.toLocaleString(currencyCodeLocaleMap[currencyCode])}
      </span>
    </div>
  );
}

export default CurrencyFormat;
