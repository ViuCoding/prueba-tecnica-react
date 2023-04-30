import styled from "styled-components";
import { useState } from "react";
import useFetch from "./hooks/useFetch";
import { Giphy } from "./components/Giphy";

const Container = styled.div`
  width: 70%;
  max-width: 1000px;
  margin: 2rem auto;
`;

const Flexer = styled.div`
  min-height: 50vh;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const AlignedDiv = styled.div`
  text-align: center;
  width: 50%;
`;
const StyledButton = styled.button`
  padding: 6px 32px;
  border: 2px solid lime;
  border-radius: 30px;
  font-family: monospace;
  font-size: 0.8rem;
  background-color: transparent;
  display: block;
  margin: 0 auto;
`;

function App() {
  const { cats } = useFetch("https://catfact.ninja/fact");
  const [page, setPage] = useState(0);

  return (
    <>
      <Container>
        <Flexer>
          <AlignedDiv>{cats}</AlignedDiv>
          <AlignedDiv>
            {cats && <Giphy catFact={cats} page={page} />}
          </AlignedDiv>
        </Flexer>
        <StyledButton onClick={() => setPage(prev => prev + 1)}>
          Click
        </StyledButton>
      </Container>
    </>
  );
}

export default App;
