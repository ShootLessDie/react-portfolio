import { Container } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

const Home = () => {
  return (
    <Container>
      <br></br>
      <h1>Hello, I'm Gellert, a capable software & mechanical engineer.</h1>
      <br></br>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="images/profile.jpg"
        />
      </Figure>
      <br>
      </br>
      <h2>Welcome to my portfolio site</h2>

    </Container>
  );
};

export default Home;
