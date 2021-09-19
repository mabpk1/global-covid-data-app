import { CountryType } from "../types";
import Select from "react-select";
import styled from "styled-components";

interface SelectCountryProps {
  countries: CountryType[];
  onItemClick: (country: CountryType[]) => void;
  handleClearAll: () => void;
}

const SelectWrapper = styled.div`
  width: 720px;
  color: black;

  @media (max-width: 480px) {
    width: 350px;
    font-size: 15px;
  }

  @media (min-width: 480px) and (max-width: 600px) {
    width: 420px;
    font-size: small;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    width: 550px;
    font-size: small;
  }
`;

const SelectCountry: React.FC<SelectCountryProps> = ({
  countries,
  onItemClick,
  handleClearAll,
}) => {
  const options: any = [];
  countries.forEach((country) => {
    options.push({ value: country, label: country.Country });
  });

  return (
    <SelectWrapper>
      <Select
        options={options}
        isMulti
        closeMenuOnSelect={false}
        placeholder="Select Country..."
        onChange={(countries: any) => {
          if (countries.length === 0) {
            handleClearAll();
          } else {
            onItemClick(countries);
          }
        }}
      />
    </SelectWrapper>
  );
};

export default SelectCountry;
