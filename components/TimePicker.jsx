import React, { useState } from "react";
import DatePicker from "react-datepicker";

const TimePicker = (_) => {
  let timeClassName = (time) => {
    return "!p-2 !h-auto text-[15px]";
  };

  return (
    <DatePicker
      selected={_.value}
      onChange={(date) => _.setValue(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="HH:mm"
      timeFormat="HH:mm"
      className="border-b border-gray-200 hover:border-blue-600 transition py-2 focus:outline-none w-full text-[15px]"
      timeClassName={timeClassName}
    />
  );
};

export default TimePicker;
