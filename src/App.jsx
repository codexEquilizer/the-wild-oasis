import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: blanchedalmond; */
  padding: 15px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        {/* Default Row is set to vertical in the Row component */}
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button
                variations="primary"
                sizes="medium"
                onClick={() => alert("Checked in")}
              >
                Check in
              </Button>
              <Button
                variations="secondary"
                sizes="small"
                onClick={() => alert("Checked out")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="No of guests" />
              <Input type="number" placeholder="No of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
