import { Content, Logo } from "./Style";
export const Header = () => {
  const goToHome = () => {
    window.open("https://campgladiator.com/", "_self");
  };
  return (
    <Content>
      <Logo onClick={() => goToHome()} />
    </Content>
  );
};
