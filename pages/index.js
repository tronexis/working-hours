import RecurringWorkingHours from "../components/RecurringWorkingHours";
import SpecificWorkingHours from "../components/SpecificWorkingHours";
import { useState, useEffect, useCallback } from "react";
import {
  getAvailabilityConstraints,
  updateAvailabilityConstraints,
} from "../lib/axios";

export default function Home(_) {
  const [recurringData, setRecurringData] = useState([]);
  const [specificData, setSpecificData] = useState([]);

  const loadData = useCallback(() => {
    setRecurringData(
      _.data.filter((item) => Object.keys(item)[0] === "allow_day_and_time")
    );
    setSpecificData(
      _.data.filter(
        (item) =>
          Object.keys(item)[0] === "allow_period" ||
          Object.keys(item)[0] === "block_period"
      )
    );
  }, [_.data]);

  const updateData = async (data) => {
    await updateAvailabilityConstraints(data);
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <div className="p-6 flex flex-col xl:flex-row gap-6 justify-center">
        <RecurringWorkingHours
          fullData={_.data}
          data={recurringData}
          setData={setRecurringData}
          updateData={updateData}
        />
        <SpecificWorkingHours
        fullData={_.data}
          data={specificData}
          setData={setSpecificData}
          updateData={updateData}
        />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await getAvailabilityConstraints();
  return {
    props: {
      data: data || [],
    },
  };
}
