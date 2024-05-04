import React, { useState } from "react";
import { chartDataType } from "../../types";
import { getDay } from "../utils/utils";

interface ExpenseChartBodyProps {
  // Add your props here
  chartData: chartDataType[];
  totalPrice?: number;
  maxValue: number;
}

const ChartStick: React.FC<{
  item: chartDataType;
  today: string;
  height: string;
  index: number;
}> = ({ item, today, height, index }) => {
  const [hover, setHover] = useState(false);
  console.log({ today }, item.day, index);
  const [animatedHeight, setAnimatedHeight] = useState<number | string>(0);
  setTimeout(() => {
    setAnimatedHeight(height);
  }, 1000 * (index + 0.5));
  return (
    <div className='flex-1 flex items-end'>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className={`${
          item.day !== today
            ? "bg-orange-red hover:bg-orange-hover"
            : "bg-cyan hover:bg-siteColor-chartActiveFocus"
        } rounded-[8px] md:w-[48px] w-[30px] relative cursor-pointer transition-all duration-500`}
        style={{
          height: animatedHeight,
        }}
      >
        <div
          className={`absolute 
          bg-brown-dark 
          text-base 
          pointer-events-none 
          rounded-xl 
          text-white 
          px-2 py-3 
          -top-2  
          left-1/2 
          -translate-x-1/2 
          transition-all 
          duration-500 
          ${hover ? "opacity-100 -mt-[100%]" : "opacity-0 mt-2"}`}
        >
          ${item.amount}
        </div>
      </div>
    </div>
  );
};

export const ExpenseChartBody: React.FC<ExpenseChartBodyProps> = (props) => {
  const { chartData = [], totalPrice, maxValue = 0 } = props;
  const today = getDay();
  const getHeight = (amount: number, symble: string = ""): string => {
    return Math.ceil((amount / maxValue) * 100) + (symble ? symble : "%");
  };

  return (
    <div className='bg-white rounded-8 p-8 rounded-2xl'>
      <div className='text-2xl font-bold'>Spending - Last 7 days</div>
      {chartData.length > 0 && (
        <div
          className='flex justify-between pt-6'
          style={{ height: getHeight(maxValue + 60, "px") }}
        >
          {chartData.map((item, index) => {
            return (
              <div
                className='group flex flex-col h-full justify-end items-center'
                key={item.day}
              >
                <ChartStick
                  item={item}
                  today={today}
                  height={getHeight(item.amount)}
                  index={index}
                />
                <span className='text-brown-medium group-hover:text-brown-dark transition-all duration-500'>
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>
      )}
      <div className='footer border-t-2 border-t-brown-medium mt-7 pt-11 pb-3 flex justify-between'>
        <div className='footer-left flex flex-col'>
          <div className='text-brown-medium'>total this month</div>
          <div className='text-4xl font-bold'>${totalPrice}</div>
        </div>
        <div className='footer-right text-right flex flex-col justify-end'>
          <div className='text-brown-dark'>+2.4%</div>
          <div className='text-brown-medium'>from last month</div>
        </div>
      </div>
    </div>
  );
};
