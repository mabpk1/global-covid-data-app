import axios from "axios";
import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import BarChart from "./components/BarChart";
import GlobalInfo from "./components/GlobalInfo";
import SelectCountry from "./components/SelectCountry";
import { CountryType, FetchDataResponseType } from "./types";

const GlobalStyle = createGlobalStyle`
  body{
    color: white;
    background-color: #afa6a6;
  }
`;

const Heading = styled.h1`
  font-size: 45px;
  text-decoration: underline;
  text-align: center;
  margin-bottom: 0;
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
