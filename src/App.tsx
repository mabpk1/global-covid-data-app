import axios from "axios";
import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import BarChart from "./components/BarChart";
import GlobalInfo from "./components/GlobalInfo";
import SelectCountry from "./components/SelectCountry";
import { CountryType, FetchDataResponseType } from "./types";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Courier New', Courier, monospace;
    color: #f74a4a;
    background-color: #dff;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      margin-top: 25px;
    }
  }
`;

const Heading = styled.h1`
  font-size: 35px;
  text-decoration: underline;
  text-align: center;
  margin-top: 35px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 25px;
    margin-top: 25px;
  }
`;

const App: React.FC = () => {
  const [data, setData] = useState<FetchDataResponseType | undefined>(
    undefined
  );
  const [activeCountries, setActiveCountries] = useState<CountryType[]>([]);

  const fetchData = async () => {
    const response = await axios.get("https://api.covid19api.com/summary");
    const data: FetchDataResponseType = await response?.data;
    setData(data);
  };

  const onClickCountry = (selectedCountries: CountryType[]) => {
    setActiveCountries(selectedCountries);
  };

  const onClearAllCountries = () => setActiveCountries([]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      {data ? (
        <>
          <Heading>Global Covid-19 Data</Heading>

          <GlobalInfo
            totalCases={data?.Global?.TotalConfirmed}
            totalDeaths={data?.Global?.TotalDeaths}
          />

          <BarChart countries={activeCountries} />

          <SelectCountry
            countries={data?.Countries}
            onItemClick={onClickCountry}
            handleClearAll={onClearAllCountries}
          />
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default App;
