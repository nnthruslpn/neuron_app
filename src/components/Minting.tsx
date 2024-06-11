import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 48%;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const CounterValue = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const CounterLabel = styled.span`
  font-size: 1rem;
  color: #888;
`;

const MintingStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StatusValue = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #337ab7;
`;

const StatusLabel = styled.span`
  font-size: 1rem;
  color: #888;
`;

const Workspace = () => {
  const bankIncome = 0;
  return (
    <Card>
      <Title>Workspace</Title>
      <Counter>
        <CounterValue>{bankIncome}</CounterValue>
        <CounterLabel>Bank Income</CounterLabel>
      </Counter>
    </Card>
  );
};

const Minting = () => {
  const bankers = 4974;
  const freeBanks = 287199;
  const totalBanks = 500000;
  const progress = Math.round((freeBanks / totalBanks) * 100);
  return (
    <Card>
      <Title>Minting</Title>
      <MintingStatus>
        <StatusValue>{progress}%</StatusValue>
        <StatusLabel>Free banks</StatusLabel>
      </MintingStatus>
      <Counter>
        <CounterValue>{bankers}</CounterValue>
        <CounterLabel>Bankers</CounterLabel>
      </Counter>
    </Card>
  );
};

const Content = () => {
  return (
    <Container>
      <Workspace />
      <Minting />
    </Container>
  );
};

export default Content;
