import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

const ChartWrapper = styled.div`
  background-color: white;
  width: 700px;
  padding: 10px;
  margin-bottom: 45px;
  @media (max-width: 480px) {
    width: 340px;
    padding: 5px;
    margin-bottom: 20px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    width: 400px;
    padding: 10px;
    margin-bottom: 20px;
  }
  @media (min-width: 600px) and (max-width: 768px) {
    width: 530px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

interface BarChartProps {
  countries: any[];
}

const BarChart: React.FC<BarChartProps> = ({ countries }) => {
  const generateChartData = () => {
    const data: number[] = [];
    const labels: string[] = [];

    countries.forEach((country) => {
      data.push(country.value.TotalConfirmed);
      labels.push(country.value.Country);
    });

    return {
      labels,
      datasets: [
        {
          label: "Confirmed Cases",
          data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  };
  return (
    <ChartWrapper>
      <Bar type="bar" data={generateChartData()} />
    </ChartWrapper>
  );
};

export default BarChart;
