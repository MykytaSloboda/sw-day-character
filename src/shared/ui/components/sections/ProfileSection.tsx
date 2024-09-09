import { getFromLocalStorage } from "@app/services";
import { getToday } from "@shared/helpers";
import { ICharacter } from "@shared/types";
import { SimpleCard } from "@shared/ui/components/cards";

interface IProps {
  character: ICharacter;
}

export const ProfileSection = ({ character }: IProps) => {
  const { name } = character;
  const characterID = getFromLocalStorage(getToday());

  return (
    <section className="bg-orange-50 p-16 dark:bg-darkOrangeBg">
      <div className="container">
        <SimpleCard>
          <div className="flex gap-4 border-b pb-5 border-line dark:border-lineDark">
            <div className="w-10 h-10 md:w-14 md:h-14">
              <img
                src={`./public/img/people/${characterID}.jpg`}
                alt="character"
                className="object-cover h-full rounded-full w-full"
              />
            </div>

            <div className="flex flex-col">
                <span className="text-lg md:text-2xl text-darkText dark:text-white font-bold">{name}</span>
            </div>
          </div>
        </SimpleCard>
      </div>
    </section>
  );
};
