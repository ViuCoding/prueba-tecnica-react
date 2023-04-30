import styled from "styled-components";
import useFetch from "./hooks/useFetch";
import { Giphy } from "./components/Giphy";

const Container = styled.div`
  width: 70%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Flexer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Fifty = styled.div`
  width: 50%;
  text-align: center;
`;

function App() {
  const { isLoading, cats, error } = useFetch("https://catfact.ninja/fact");
  return (
    <>
      <Container>
        <Flexer>
          <Fifty>{cats}</Fifty>
          <Fifty>{cats && <Giphy catFact={cats} />}</Fifty>
        </Flexer>
      </Container>
    </>
  );
}

export default App;
