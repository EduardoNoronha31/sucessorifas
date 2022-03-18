import { Header } from "../../Components/Header";
import {
  Content,
  Main,
  TextDiv,
  Text,
  Icon,
  InfoProductDiv,
  ProductTextDiv,
  ProductTextTitle,
  ProductTextSubTitle,
  ProductDiv,
  ProductContent,
  Product,
} from "./style";
import iphoneIMG from "../../assets/iphoneIMG.jpg";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Content>
        <Main>
          <TextDiv>
            <Text>
              <h1>Sucesso Rifas</h1>
              <h4>
                Nós destinamos uma parte da arrecadação das rifas para fazer
                doações em prol do apoio para pessoas necessitadas. Ao final de
                cada rifa, escolhemos alguma instituição para fazer as doações.
                A cada doação feita, um vídeo é enviado por WhatsApp para
                agradecer a contribuição dada por cada pessoa que participou.
              </h4>
            </Text>
          </TextDiv>
          <InfoProductDiv>
            <ProductTextDiv>
                <Icon />
              <div>
                <ProductTextTitle>
                  Veja as rifas que estão rolando...
                </ProductTextTitle>
              </div>
              <div>
                <ProductTextSubTitle>
                  Compre e concorra a super prêmios!
                </ProductTextSubTitle>
              </div>
            </ProductTextDiv>
          </InfoProductDiv>
          <ProductDiv>
            <ProductContent>
              <a href="./">
                <Product>
                  <img src={iphoneIMG} alt="Foto de um Iphone 11" />
                  <div>
                    <h1>Rifa Iphone 11 ou 4.000R$ no PIX</h1>
                    <span>10.000 Números</span>
                    <h2>Data de finalização da rifa: 31/01/2022</h2>
                    <h4>
                      Leia os <a href="/termos">Termos</a>
                    </h4>
                  </div>
                </Product>
              </a>
            </ProductContent>
          </ProductDiv>
        </Main>
      </Content>
    </>
  );
};
