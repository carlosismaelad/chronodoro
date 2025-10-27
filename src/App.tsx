import "./styles/theme.css";
import "./styles/globals.css";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
      <Container>
        <Heading>ABOUT</Heading>
      </Container>
    </>
  );
}
