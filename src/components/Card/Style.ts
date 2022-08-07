import { CardInterface } from "./../../interfaces/Card";
import React from "react";
import styled from "styled-components";

interface ThumbProps {
  image?: string;
}

export const Content = styled.div`
  display: flex;
  width: 250px;
  height: 350px;
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
