import * as React from "react";

interface TextDarkProps {
  dark: boolean;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const TextDark = ({
  dark,
  as: Component = "span",
  className = "",
  children,
}: TextDarkProps) => {
  const colorClass = dark ? "text-white" : "text-black";

  return React.createElement(
    Component,
    {
      className: `${colorClass} ${className}`.trim(),
    },
    children,
  );
};

export default TextDark;
