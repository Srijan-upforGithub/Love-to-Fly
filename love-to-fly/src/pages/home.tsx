import Navbar from "../components/navbar";
import "../App.css"
import {
  Container,
  Wrapper,
  BigHeading,
  Button,
  Img,
} from "../../public/styledCmponents";

export default function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Wrapper>
          <div className="lets-start">
            <BigHeading> Let Starts Your Beautiful Journey With Us</BigHeading>
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ornare a
              dolor porta egestas odio sollicitudin pellentesque egestas
              malesuada. Pulvinar quis tempus aliquam vitae sagittis fermentum
              quis euismod rhoncus. Ipsum ptwnti uitrices nulla commodo
              faucibus.
            </p>
            <div>
              <Button bg="rgb(11,150,251)" color="#fff">
                Plane A Trip
              </Button>
              <Button bg="Transparent" color="rgb(11,150,251)">
                Plane A Trip
              </Button>
            </div>
          </div>
          <div className="img-div">
            <Img src="/images/asset 2.png"></Img>
          </div>
        </Wrapper>
      </Container>
    </>
  );
}
