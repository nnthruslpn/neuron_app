import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";

import styled from "styled-components";

import { useTonConnect } from "./hooks/useTonConnect";

import "@twa-dev/sdk";

const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const QuantityComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const QuantityText = styled.span`
  font-size: 18px;
  margin-bottom: 0;
  margin-left: 16px;
`;

const SliderContainer = styled.div`
  width: 40px; /* Make the slider wider */
  height: 100px;
  background-color: #ddd;
  border-radius: 10px;
  margin-right: 16px;
  display: flex; /* Add this to make the slider fill the container */
  flex-direction: column-reverse; /* Добавить это свойство */
  
`;

const Slider = styled.div`
  width: 100%; /* Make the blue bar fill the entire width */
  height: 0%; /* Initialize the height to 0 */
  background-color: #337ab7;
  border-radius: 10px;
  transition: height 0.3s ease-in-out;
  align-self: flex-start; /* Make the slider start from the bottom */
`;

const NftComponent = styled.div`
  flex: 1; /* Добавьте это свойство */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const NftText = styled.span`
  font-size: 18px;
  margin-bottom: 0;
`;
const FlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Добавьте это свойство */
  gap: 10px;
  align-items: center;
`;

const FlexBoxCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
function App() {
  const { network } = useTonConnect();
  const quantity = 155; // Replace with actual quantity
  const maxQuantity = 300; // Replace with actual max quantity
  const nftCount = 2; // Replace with actual NFT count

  return (
    <StyledApp>
    <FlexBoxRow style={{ 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '8px 16px', 
      backgroundColor: '#f7f7f7', 
      height: 40, 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      borderBottomLeftRadius: 10, 
      borderBottomRightRadius: 10 
    }}>
      <h2 style={{
        color: '#666', // серый цвет текста
        background: 'linear-gradient(to right, #666, #999)', // градиент для текста
        WebkitBackgroundClip: 'text', // для корректного отображения градиента в Chrome
        WebkitTextFillColor: 'transparent' // для корректного отображения градиента в Chrome
      }}>
        NEURON
      </h2>
      <TonConnectButton /> {/* используем компонент TonConnectButton */}
    </FlexBoxRow>
    <AppContainer style={{ marginTop: 40, width: '90vw' }}>
  <FlexBoxRow style={{ justifyContent: 'stretch', alignItems: 'center', width: '100%' }}>
    <FlexBoxCol style={{ flex: 1, width: '50%' }}>
      <NftComponent>
        <NftText>
          NFT's: {nftCount}
        </NftText>
      </NftComponent>
    </FlexBoxCol>
    <FlexBoxCol style={{ flex: 1, width: '50%' }}>
      <QuantityComponent>
        <SliderContainer>
          <Slider
            style={{
              height: `${(quantity / maxQuantity) * 100}%`,
            }}
          />
        </SliderContainer>
        <QuantityText>
          Free NFT's<br/>
          <span style={{ fontSize: 12 }}>
            {quantity}/{maxQuantity}
          </span>
        </QuantityText>
      </QuantityComponent>
    </FlexBoxCol>
  </FlexBoxRow>
</AppContainer>
  </StyledApp>
);
}

export default App;

