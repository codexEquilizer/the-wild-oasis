import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: aquamarine;
`;

const StyledApp = styled.div`
  background-color: blanchedalmond;
  padding: 15px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("Checked in")}>Check in</Button>

        <Input type="number" placeholder="No of guests" />
      </StyledApp>
    </>
  );
}

export default App;
