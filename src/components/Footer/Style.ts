import styled from "styled-components";

export const Content = styled.div`
  height: 100px;
  padding: 0px 30px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  background-color: #333;
`;

export const FooterStoreLinks = styled.div`
  width: 20%;
  height: auto;
  gap: 10px;
  display: flex;
`;

export const AppStore = styled.div`
  width: 136px;
  height: 40px;
  cursor: pointer;
  background-image: url("https://s3.amazonaws.com/cgcdn/global-ui/images/app-buttons/AppStoreLightDefault.svg");
  background-size: contain;
  background-repeat: no-repeat;
`;

export const PlayStore = styled.div`
  width: 136px;
  height: 40px;
  cursor: pointer;
  background-image: url("https://s3.amazonaws.com/cgcdn/global-ui/images/app-buttons/GooglePlayLightDefault.svg");
  background-size: contain;
  background-repeat: no-repeat;
`;

export const FooterLogo = styled.div`
  width: 50px;
  height: 50px;
  background-image: url("https://s3.amazonaws.com/cgcdn/global-ui/images/logos/campgladiator/icon-white.svg");
  background-size: contain;
  background-repeat: no-repeat;
`;
