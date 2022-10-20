import React from "react";

const SpecificWorkingHours = (props) => {
  return (
    <div className="p-12 space-y-5 bg-white shadow max-w-screen-md">
      <div className="space-y-6">
        <h2 className="text-[23px] font-medium heading">
          Specific working hours
        </h2>
        <p className="text-[13px] text-gray-400">
          <span className="text-red-500 font-bold mr-0.5">Note: </span>You can
          allow (whitelist) or block (blacklist) specific time intervals in
          addition to your recurring working hours. Specific working hours are
          useful for holidays, out of office, or irregular schedules that change
          frequently.
        </p>
      </div>
      <div className="space-y-3">
        <p className="text-[13px] text-blue-600">Add specific working hours</p>
        <form action="" className="flex flex-col gap-4">
          <fieldset>
            <label
              for="availability-field"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            />
            <select
              id="availability-field"
              class="bg-white border-b-2 border-gray-100 text-gray-900 focus:border-none text-[15px] block w-full max-w-[22rem] py-2 cursor-pointer"
            >
              <option className="font-['Open_Sans']" value="Monday">
                Allow availability (e.g. one-off)
              </option>
              <option className="font-['Open_Sans']" value="Monday">
                Block availability (e.g. out of office)
              </option>
            </select>
          </fieldset>
          <fieldset className="flex flex-col sm:flex-row gap-4 sm:items-end">
            <fieldset>
              <button
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                class="bg-white border-b-2 border-gray-100 text-gray-900 focus:border-none text-[15px] w-full py-2 inline-flex items-center justify-between px-0.5 min-w-[12rem]"
                type="button"
              >
                2022-10-20 09:00
                <svg
                  class="ml-2 w-4 h-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </fieldset>
            <fieldset>
              <button
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                class="bg-white border-b-2 border-gray-100 text-gray-900 focus:border-none text-[15px] w-full py-2 inline-flex items-center justify-between px-0.5 min-w-[12rem]"
                type="button"
              >
                2022-10-20 09:00
                <svg
                  class="ml-2 w-4 h-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </fieldset>
            <button className="px-3 py-2 text-xs font-semibold text-gray-500 transition border rounded hover:bg-gray-50">
              Add
            </button>
          </fieldset>
        </form>
      </div>
      <div className="space-y-3">
        <p className="text-[13px] text-blue-600">
          Current specific working hours
        </p>
        <p className="text-[13px] text-gray-400">
          No specific working hours defined.
        </p>
      </div>
    </div>
  );
};

export default SpecificWorkingHours;
