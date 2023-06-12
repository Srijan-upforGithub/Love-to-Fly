import Navbar from "../components/navbar";
import { Container, Wrapper, BigHeading, Button, Img } from "../../public/styledCmponents";

export default function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Wrapper>
          <div className="lets-start">
            <BigHeading> Let Starts Your Beautiful Journey With</BigHeading>
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              officia magnam laborum expedita fuga nemo impedit odio possimus?
            </p>
            <div>
                <Button bg="rgb(11,150,251)" color="#fff">Plane A Trip</Button>
                <Button bg="Transparent" color="rgb(11,150,251)">Plane A Trip</Button>
            </div>
          </div>
          <div className="img-div">
            <Img src=""></Img>
          </div>
        </Wrapper>
      </Container>
    </>
  );
}
