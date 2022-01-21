import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import useSWR from "swr";

export default function Stat({ Icon, label, endpoint }) {
  let { data } = useSWR(endpoint, { suspense: true });

  return (
    <div className="flex items-center w-full">
      <Icon className="w-10 h-10 shrink-0" />
      <div className="pl-5">
        <p className="text-sm font-medium text-gray-500 truncate">{label}</p>
        <div className="flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">{data.stat}</p>
          <p
            className={`ml-2 flex items-baseline text-sm font-semibold ${
              data.changeType === "increase" ? "text-green-600" : "text-red-600"
            }`}
          >
            {data.changeType === "increase" ? (
              <ArrowSmUpIcon className="self-center w-5 h-5 text-green-500 shrink-0" />
            ) : (
              <ArrowSmDownIcon className="self-center w-5 h-5 text-red-500 shrink-0" />
            )}
            {data.change}
          </p>
        </div>
      </div>
    </div>
  );
}
