import styled from "styled-components";

interface ThumbProps {
  image?: string;
}

export const Content = styled.div`
  display: flex;
  width: 250px;
  height: 450px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
  flex-direction: column;
`;

export const Thumb = styled.div<ThumbProps>`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 250px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  align-items: flex-start;
`;

export const Title = styled.div`
  width: 240px;
  padding-top: 10px;
  padding-right: 5px;
  font-size: 16px;
  color: red;
`;

export const Description = styled.div`
  width: 240px;
  padding-top: 10px;
  padding-right: 5px;
  font-size: 12px;
`;

export const Tag = styled.div`
  width: 240px;
  padding-top: 10px;
  padding-right: 5px;
  font-size: 12px;
  color: red;
`;

export const VideoButton = styled.button`
  background-color: black;
  align-self: center;
  margin-bottom: 10px;
  border-radius: 5px;
  width: 150px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  min-height: 50px;
`;
