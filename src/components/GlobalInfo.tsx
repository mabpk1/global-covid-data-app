import styled from "styled-components";

interface GlobalInfoProps {
  totalCases: number;
  totalDeaths: number;
}

const Wrapper = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    gap: 0;
  }
`;

const Stats = styled.h3`
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 0;
  }
`;

const GlobalInfo: React.FC<GlobalInfoProps> = ({ totalCases, totalDeaths }) => {
  return (
    <Wrapper>
      <Stats>Cases: {new Intl.NumberFormat().format(totalCases)}</Stats>
      <Stats>Deaths: {new Intl.NumberFormat().format(totalDeaths)}</Stats>
    </Wrapper>
  );
};

export default GlobalInfo;
