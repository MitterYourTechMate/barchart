import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
  return (
    <BarChart
      series={[
        { data: [35, 44, 24, 34], label:"Company1"},
        { data: [51, 6, 49, 30] , label:"Company2"},
        // { data: [15, 25, 30, 50] , label:"Company3"},
        // { data: [60, 50, 15, 25] , label:"Company4"},
      ]}
      borderRadius={30}
      height={500}
      colors={["black", "blue", "orange", "brown"]}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band', label:"Quaterly Sales"}]}
      margin={{ top: 50, bottom: 50, left: 40, right: 10 }}
      yAxis={[{label:"Sales in millions"}]}
    />
  );
}