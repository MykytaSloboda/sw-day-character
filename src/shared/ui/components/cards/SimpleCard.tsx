import { IChildrenProps } from "@shared/types";

export const SimpleCard = ({ children }: IChildrenProps) => (
  <div className="m-1 border border-transparent rounded p-5 bg-white dark:bg-darkBg dark:text-white flex flex-col gap-4 shadow-md">{children}</div>
);
