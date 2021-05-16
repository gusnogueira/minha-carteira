import React from "react";

import CountUp from "react-countup";

import dollarImg from "../../assets/dollar.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import arrowDownImg from "../../assets/arrow-down.svg";

import { Container } from "./styles";

interface IWalletBoxProps {
  title: string;
  ammount: number;
  footerLabel: string;
  icon: "dolar" | "arrowUp" | "arrowDown";
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  ammount,
  footerLabel,
  icon,
  color,
}) => {
  const iconSelected = () => {
    switch (icon) {
      case "dolar":
        return dollarImg;
      case "arrowUp":
        return arrowUpImg;
      case "arrowDown":
        return arrowDownImg;

      default:
        return undefined;
    }
  };
  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={ammount}
          prefix={"R$ "}
          separator="."
          decimal=","
          decimals={2}
        />
      </h1>
      <small>{footerLabel}</small>
      <img src={iconSelected()} alt={title} />
    </Container>
  );
};

export default WalletBox;
