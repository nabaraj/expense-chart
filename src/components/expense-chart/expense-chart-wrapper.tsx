import * as React from "react";
import { ExpenseChartHead } from "./expense-chart-head";
import { ExpenseChartBody } from "./expense-chart-body";
import { chartData } from "../../data/data";
import { chartDataType } from "../../types";

// export interface ExpenseChartComponentProps {}

export const ExpenseChartComponent: React.FC = () => {
  const totalPrice: { totalHeight: number; maxValue: number } =
    chartData.reduce(
      (total, item: chartDataType) => {
        if (item.amount > total.maxValue) {
          total.maxValue = item.amount;
        }
        total.totalHeight += item.amount;
        return total;
      },
      { totalHeight: 0, maxValue: 0 }
    );
  return (
    <div className='container mx-auto p-2 flex-col align-middle  min-h-screen flex justify-center'>
      <ExpenseChartHead totalPrice={totalPrice.totalHeight} />
      <ExpenseChartBody
        chartData={chartData}
        totalPrice={totalPrice.totalHeight}
        maxValue={totalPrice.maxValue}
      />
    </div>
  );
};
