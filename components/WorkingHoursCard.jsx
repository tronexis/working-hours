import { XMarkIcon } from "@heroicons/react/20/solid";
import { format } from "date-fns";

const WorkingHoursCard = (_) => {
  return (
    <div className="p-8 space-y-5 bg-white shadow xl:w-1/2">
      <div className="space-y-6">
        <h2 className="text-[23px] font-medium heading">{_.heading}</h2>
        <p className="text-[13px] text-gray-400">
          <span className="text-red-500 font-bold mr-0.5">Note: </span>
          {_.note}
        </p>
      </div>
      {_.children}
      <div className="space-y-3">
        <p className="text-[13px] text-blue-600">
          Current {_.type} working hours
        </p>
        <div className="text-sm">
          {!!_.data?.length &&
            _.type === "recurring" &&
            _.data?.map((item, i) => (
              <div
                key={i}
                className="text-gray-400 px-4 py-1.5 hover:bg-gray-100 transition flex justify-between items-center"
              >
                <p>
                  <em className="not-italic text-black">
                    {item?.allow_day_and_time?.day}
                  </em>{" "}
                  from{" "}
                  <em className="not-italic text-black">
                    {item?.allow_day_and_time?.start}
                  </em>{" "}
                  to{" "}
                  <em className="not-italic text-black">
                    {item?.allow_day_and_time?.end}
                  </em>
                </p>
                <button
                  onClick={() => _.onRemove(item)}
                  className="hover:bg-black/5 rounded-full p-1.5 transition"
                >
                  <XMarkIcon className="text-gray-400 h-5 w-5" />
                </button>
              </div>
            ))}
          {!!_.data?.length &&
            _.type === "specific" &&
            _.data?.map((item, i) => (
              <div
                key={i}
                className="text-gray-400 px-4 py-1.5 hover:bg-gray-100 transition flex justify-between items-center"
              >
                {Object.keys(item)[0] === "block_period" ? (
                  <p>
                    <em className="not-italic text-black">Block</em> from{" "}
                    <em className="not-italic text-black">
                      {format(new Date(item?.block_period?.start), 'yyyy-MM-dd HH:mm')}
                    </em>{" "}
                    to{" "}
                    <em className="not-italic text-black">
                      {format(new Date(item?.block_period?.end), 'yyyy-MM-dd HH:mm')}
                    </em>
                  </p>
                ) : (
                  <p>
                    <em className="not-italic text-black">Allow</em> from{" "}
                    <em className="not-italic text-black">
                      {format(new Date(item?.allow_period?.start), 'yyyy-MM-dd HH:mm')}
                    </em>{" "}
                    to{" "}
                    <em className="not-italic text-black">
                      {format(new Date(item?.allow_period?.end), 'yyyy-MM-dd HH:mm')}
                    </em>
                  </p>
                )}
                <button
                  onClick={() => _.onRemove(item)}
                  className="hover:bg-black/5 rounded-full p-1.5 transition"
                >
                  <XMarkIcon className="text-gray-400 h-5 w-5" />
                </button>
              </div>
            ))}
        </div>
        {!_.data?.length && (
          <p className="text-[13px] text-gray-400">
            No {_.type} working hours defined.
          </p>
        )}
      </div>
    </div>
  );
};

export default WorkingHoursCard;
