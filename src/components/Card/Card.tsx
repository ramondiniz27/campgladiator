import { CardInterface } from "../../interfaces/Card";
import { Content, Thumb } from "./Style";

export const Card = (props: { cardInfo: CardInterface }) => {
  const { cardInfo } = props;
  return (
    <Content>
      <Thumb image={cardInfo.thumbnail}></Thumb>
    </Content>
  );
};
