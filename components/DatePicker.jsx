import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

const DatePicker = (_) => {
  let timeClassName = (time) => {
    return "!p-2 !h-auto text-[15px]";
  };
  return (
    <ReactDatePicker
      selected={_.value}
      onChange={(date) => _.setValue(date)}
      className="border-b border-gray-200 hover:border-blue-600 transition py-2 focus:outline-none w-full text-[15px]"
      dateFormat="yyyy-MM-dd HH:mm"
      timeFormat="HH:mm"
      timeIntervals={15}
      showTimeSelect
      timeClassName={timeClassName}
      {..._}
    />
  );
};

export default DatePicker;
