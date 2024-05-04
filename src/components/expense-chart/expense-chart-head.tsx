import React from "react";
interface ExpenseChartHeadProps {
  // Add your props here
  totalPrice?: number;
}

export const ExpenseChartHead: React.FC<ExpenseChartHeadProps> = ({
  totalPrice = 0,
}) => {
  // Add your component logic here
  return (
    <header className='bg-orange-red p-7 text-white rounded-2xl flex justify-between mb-6'>
      <div className='head-left flex flex-col'>
        <h1 className='pb-2'>My balance</h1>
        <div className='text-2xl font-bold'>${1500 - totalPrice}</div>
      </div>
      <div className='head-right relative'>
        <div className='block bg-brown-dark rounded-full p-6'></div>
        <div className='block border-2 border-white rounded-full p-6 top-0 -ml-[50%] absolute'></div>
      </div>
    </header>
  );
};
