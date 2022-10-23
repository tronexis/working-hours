import Select from "./Select";
import WorkingHoursCard from "./WorkingHoursCard";
import DatePicker from "./DatePicker";
import React, { useState } from "react";
import { format } from "date-fns";
import {
  getAvailabilityConstraints,
} from "../lib/axios";

const SpecificWorkingHours = (_) => {
  const availabilities = [
    {
      id: 1,
      value: "Allow availablility (e.g. one-off)",
    },
    {
      id: 2,
      value: "Block availablility (e.g. out of office)",
    },
  ];

  const [availability, setAvailability] = useState(availabilities[0]);

  const day = new Date();
  // const day2 = new Date();
  
  day.setDate(day.getDate() + 1);
  const [start, setStart] = useState(day);

  const [end, setEnd] = useState(day);

  const handleAdd = async (e) => {
    e.preventDefault();
    const newData = availability.id === 0 ? {
      allow_period: {
        start: format(start, "yyyy-MM-dd'T'HH:mm:ssxxx"),
        end: format(end, "yyyy-MM-dd'T'HH:mm:ssxxx"),
      },
    }
    : {
      block_period: {
        start: format(start, "yyyy-MM-dd'T'HH:mm:ssxxx"),
        end: format(end, "yyyy-MM-dd'T'HH:mm:ssxxx"),
      },
    };
    console.log(newData);

    const data = _.data.length > 0 ? [..._.data, newData] : [newData];

    _.setData(data);
    await _.updateData([..._.fullData, newData]);
  };

  // const handleRemove = async (item) => {
  //   let data = _.data;
  //   await _.updateData(
  //     _.fullData?.filter(
  //       (_, i) =>
  //        !( _.allow_day_and_time?.day === item.allow_day_and_time.day &&
  //         _.allow_day_and_time?.start === item.allow_day_and_time.start &&
  //         _.allow_day_and_time?.end === item.allow_day_and_time.end)
  //     )
  //   );
  //   data = _.data.filter(
  //     (_, i) =>
  //       !(_.allow_day_and_time?.day === item.allow_day_and_time.day &&
  //       _.allow_day_and_time?.start === item.allow_day_and_time.start &&
  //       _.allow_day_and_time?.end === item.allow_day_and_time.end)
  //   );
  //   _.setData(data);
  // };

  const handleRemove = async (index) => {
    let data = _.data.filter((_, i) => index !== i);
    await _.updateData(data);
    data = await getAvailabilityConstraints();
    _.setData(data);
  };
  
  return (
    <WorkingHoursCard
      heading="Specific working hours"
      note="You can
          allow (whitelist) or block (blacklist) specific time intervals in
          addition to your recurring working hours. Specific working hours are
          useful for holidays, out of office, or irregular schedules that change
          frequently."
      type="specific"
      data={_.data}
      onRemove={handleRemove}
    >
      <div className="space-y-3">
        <p className="text-[13px] text-blue-600">Add specific working hours</p>
        <form
          action=""
          className="flex flex-col sm:flex-row gap-4 sm:items-end"
        >
          <fieldset className="min-w-[10rem]">
            <Select data={availabilities} selected={availability} setSelected={setAvailability} />
          </fieldset>
          <fieldset className="min-w-[2rem]">
            <DatePicker value={start} setValue={setStart} minDate={day} />
          </fieldset>
          <fieldset className="min-w-[2rem]">
            <DatePicker value={end} setValue={setEnd} minDate={day} />
          </fieldset>
          <button onClick={handleAdd} className="px-3 py-2 text-xs font-semibold text-gray-500 transition border rounded hover:bg-gray-50">
            Add
          </button>
        </form>
      </div>
    </WorkingHoursCard>
  );
};

export default SpecificWorkingHours;
