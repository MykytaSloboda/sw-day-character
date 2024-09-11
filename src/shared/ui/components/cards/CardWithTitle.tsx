import { ReactNode } from "react";

import stackIcon from "/icons/stack.svg";

interface IProps {
  children: ReactNode;
  title: string;
}

export const CardWithTitle = ({ children, title = "" }: IProps) => (
  <div className="m-1 border border-line dark:border-lineDark rounded-lg">
    <div className="w-full border-b border-line rounded-lg dark:border-lineDark bg-lightBg dark:bg-darkHead p-5 flex items-center gap-2">
      <img src={stackIcon} alt="stack" />
      <span className="font-medium text-darkText dark:text-white text-base">
        {title}
      </span>
    </div>

    <div className="p-5 bg-white dark:bg-darkBg dark:text-white rounded-lg">{children}</div>
  </div>
);
