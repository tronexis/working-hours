import React, { useState } from "react";
import TimePicker from "./TimePicker";
import Select from "./Select";
import WorkingHoursCard from "./WorkingHoursCard";
import Axios from "axios";
import { format } from "date-fns";
import { getAvailabilityConstraints } from "../lib/axios";

const RecurringWorkingHours = (_) => {
  const weekDays = [
    {
      id: 1,
      value: "Monday",
    },
    {
      id: 2,
      value: "Tuesday",
    },
    {
      id: 3,
      value: "Wednesday",
    },
    {
      id: 4,
      value: "Thursday",
    },
    {
      id: 5,
      value: "Friday",
    },
    {
      id: 6,
      value: "Saturday",
    },
    {
      id: 7,
      value: "Sunday",
    },
  ];

  const [day, setDay] = useState(weekDays[0]);
  const [start, setStart] = useState(new Date("2022-10-23T09:00:00"));
  const [end, setEnd] = useState(new Date("2022-10-23T17:00:00"));

  const handleAdd = async (e) => {
    e.preventDefault();
    const newData = {
      allow_day_and_time: {
        day: day.value,
        start: format(start, "HH:mm"),
        end: format(end, "HH:mm"),
      },
    };

    const data = _.data.length > 0 ? [..._.data, newData] : [newData];

    _.setData(data);
    await _.updateData([..._.fullData, newData]);
  };

  const handleRemove = async (item) => {
    let data = _.data;
    await _.updateData(
      _.fullData?.filter(
        (_, i) =>
         !( _.allow_day_and_time?.day === item.allow_day_and_time.day &&
          _.allow_day_and_time?.start === item.allow_day_and_time.start &&
          _.allow_day_and_time?.end === item.allow_day_and_time.end)
      )
    );
    data = _.data.filter(
      (_, i) =>
        !(_.allow_day_and_time?.day === item.allow_day_and_time.day &&
        _.allow_day_and_time?.start === item.allow_day_and_time.start &&
        _.allow_day_and_time?.end === item.allow_day_and_time.end)
    );
    _.setData(data);
  };

  return (
    <WorkingHoursCard
      heading="Recurring working hours"
      note="Define
    which weekly recurring times you are available. The working hours
    apply to all projects that include you."
      type="recurring"
      data={_.data}
      onRemove={handleRemove}
    >
      <div className="space-y-3">
        <p className="text-[13px] text-blue-600">Add recurring working hours</p>
        <form
          action=""
          className="flex flex-col sm:flex-row gap-4 sm:items-end"
        >
          <fieldset className="min-w-[10rem]">
            <Select data={weekDays} selected={day} setSelected={setDay} />
          </fieldset>
          <fieldset className="min-w-[2rem]">
            <TimePicker value={start} setValue={setStart} />
          </fieldset>
          <fieldset className="min-w-[2rem]">
            <TimePicker value={end} setValue={setEnd} />
          </fieldset>
          <button
            type="button"
            onClick={handleAdd}
            className="px-3 py-2 text-xs font-semibold text-gray-500 transition border rounded hover:bg-gray-50"
          >
            Add
          </button>
        </form>
      </div>
    </WorkingHoursCard>
  );
};

export default RecurringWorkingHours;
