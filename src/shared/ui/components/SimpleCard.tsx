import { IChildrenProps } from "@shared/types";

export const SimpleCard = ({ children }: IChildrenProps) => (
  <div className="border border-transparent rounded p-5 bg-white dark:bg-darkBg dark:text-white">{children}</div>
);
