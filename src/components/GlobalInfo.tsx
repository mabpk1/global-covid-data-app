import styled from "styled-components";

interface GlobalInfoProps {
  totalCases: number;
  totalDeaths: number;
}

const Wrapper = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
`;

const Data = styled.h3`
  font-size: 30px;
`;

const GlobalInfo: React.FC<GlobalInfoProps> = ({ totalCases, totalDeaths }) => {
  return (
    <Wrapper>
      <Data>Cases: {new Intl.NumberFormat().format(totalCases)}</Data>
      <Data>Deaths: {new Intl.NumberFormat().format(totalDeaths)}</Data>
    </Wrapper>
  );
};

export default GlobalInfo;
