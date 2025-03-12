import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: aquamarine;
`;

const Button = styled.button`
  font-weight: 500;
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: 7px;
  background-color: slateblue;
  color: whitesmoke;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: blanchedalmond;
  padding: 15px;
`;

function App() {
  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button onClick={() => alert("Checked in")}>Check in</Button>

      <Input type="number" placeholder="No of guests" />
    </StyledApp>
  );
}

export default App;
