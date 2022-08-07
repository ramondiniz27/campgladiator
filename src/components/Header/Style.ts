import styled from "styled-components";
// @ts-ignore
import logo from "../../assets/images/logo.png";

export const Content = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  padding: 0px 30px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.div`
  width: 190px;
  height: 90px;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${logo});
`;
