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
  margin: 0 auto;
  color: black;
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
