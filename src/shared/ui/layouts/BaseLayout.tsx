import { IChildrenProps } from "@shared/types";
import { Header } from "@/shared/ui/components/Header";

export const BaseLayout = ({ children }: IChildrenProps) => (
    <>
        <Header />
        {children}
    </>
);
