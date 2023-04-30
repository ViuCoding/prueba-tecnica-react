import styled from "styled-components";
import { useState } from "react";
import useFetch from "./hooks/useFetch";
import { Giphy } from "./components/Giphy";

const Container = styled.div`
  width: 70%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Flexer = styled.div`
  min-height: 50vh;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 950px) {
    flex-direction: row;
  }
`;

const Fifty = styled.div`
  text-align: center;
`;
const StyledButton = styled.button`
  padding: 6px 32px;
  border: 2px solid lime;
  border-radius: 30px;
  font-family: monospace;
  font-size: 0.8rem;
  background-color: transparent;
`;

function App() {
  const { cats } = useFetch("https://catfact.ninja/fact");
  const [page, setPage] = useState(0);

  return (
    <>
      <Container>
        <Flexer>
          <Fifty>{cats}</Fifty>
          <Fifty>{cats && <Giphy catFact={cats} page={page} />}</Fifty>
        </Flexer>
        <Fifty>
          <StyledButton onClick={() => setPage(prev => prev + 1)}>
            Click
          </StyledButton>
        </Fifty>
      </Container>
    </>
  );
}

export default App;
