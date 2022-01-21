import { ExclamationCircleIcon } from "@heroicons/react/outline";

export default function Error({ children }) {
  return (
    <>
      <div className="flex items-center text-sm font-semibold text-red-500">
        <ExclamationCircleIcon className="w-5 h-5 mr-2" />
        {children}
      </div>
    </>
  );
}
