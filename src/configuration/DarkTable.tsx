import * as React from "react";
import TextDark from "./TextDark";

interface DarkTableProps {
  dark: boolean;
  title?: string;
  className?: string;
  tableClassName?: string;
  children: React.ReactNode;
}

const DarkTable = ({
  dark,
  title,
  className = "",
  tableClassName = "",
  children,
}: DarkTableProps) => {
  return (
    <div
      className={`overflow-x-auto rounded-lg shadow-md ${dark ? "bg-gray-800 text-white" : "bg-white text-black"} ${className}`.trim()}
    >
      {title && (
        <TextDark
          dark={dark}
          as="div"
          className="px-4 py-4 text-xl font-semibold"
        >
          {title}
        </TextDark>
      )}
      <table
        className={`w-full text-sm text-left ${dark ? "text-gray-300" : "text-gray-500"} ${tableClassName}`.trim()}
      >
        {children}
      </table>
    </div>
  );
};

export default DarkTable;
