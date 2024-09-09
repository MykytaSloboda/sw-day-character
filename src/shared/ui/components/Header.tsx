import { DarkModeToggle } from "@shared/ui/DarkModeToggle";

export const Header = () => (
    <header className="border-b border-line bg-white dark:border-lineDark dark:bg-darkBg py-3 flex">
        <div className="container">
            < DarkModeToggle />
        </div>
    </header>
);
