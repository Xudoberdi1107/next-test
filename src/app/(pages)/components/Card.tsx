import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

let cardCss = {
  border: "1px solid reds",
  padding: "20px",
  margin: "20px",
};
function Card({ children }: CardProps) {
  return <div style={cardCss}>{children}</div>;
}

export default Card;
