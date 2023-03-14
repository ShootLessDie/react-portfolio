import { Container } from "react-bootstrap";
import ContactForm from "../Components/ContactForm";
import MoreInformation from "../Components/MoreInformation";

const Contact = () => {
  return (
    <Container>
      <br></br>
      <h1>Contact</h1>
      <br></br>
      <ContactForm />
      <br></br>
      <MoreInformation />
    </Container>
  );
};

export default Contact;
