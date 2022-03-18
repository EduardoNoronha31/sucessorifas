import { HeaderDiv, Logo, LinksDiv } from "./style";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <>
      <HeaderDiv>
        <a href="/">
          <Logo src={logo} alt="Logo" />
        </a>
        <LinksDiv>
          <a href="/">Termos</a>
          <a href="/">Sorteios</a>
          <a href="/">Ganhadores</a>
        </LinksDiv>
      </HeaderDiv>
    </>
  );
};
