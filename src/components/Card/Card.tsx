import { useState } from "react";
import { CardInterface } from "../../interfaces/Card";
import {
  Content,
  Description,
  Tag,
  TextContent,
  Thumb,
  Title,
  VideoButton,
} from "./Style";

export const Card = (props: { cardInfo: CardInterface }) => {
  const { cardInfo } = props;

  const goToVideo = () => {
    window.open(cardInfo.media, "_blank");
  };

  return (
    <Content>
      <Thumb image={cardInfo.thumbnail} />
      <TextContent>
        <Title>{cardInfo.title}</Title>
        <Description>{cardInfo.description}</Description>
        <Tag>
          <strong>Impact:</strong> {cardInfo.impactTag}
        </Tag>
        <Tag>
          <strong>Level:</strong> {cardInfo.levelTag}
        </Tag>
        <Tag>
          <strong>Duration:</strong> {cardInfo.duration}
        </Tag>
      </TextContent>
      <VideoButton onClick={() => goToVideo()}>Watch Video</VideoButton>
    </Content>
  );
};
