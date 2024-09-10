import { getFromLocalStorage } from "@app/services";
import { getToday } from "@shared/helpers";
import { ICharacter } from "@shared/types";
import { SimpleCard } from "@shared/ui/components/cards";

interface IProps {
  character: ICharacter;
  homeName: string;
}

export const ProfileSection = ({ character, homeName }: IProps) => {
  const { name, gender, height, mass, hair_color, eye_color, birth_year } = character;
  const characterID = getFromLocalStorage(getToday());

  return (
    <section className="bg-orange-50 p-5 md:p-16 dark:bg-darkOrangeBg">
      <div className="container">
        <SimpleCard>
          <div className="flex gap-4 flex-wrap border-b pb-5 border-line dark:border-lineDark">
            <div className="w-10 h-10 md:w-14 md:h-14">
              <img
                src={`./img/people/${characterID}.jpg`}
                alt="character"
                className="object-cover h-full rounded-full w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <span className="text-lg md:text-2xl text-darkText dark:text-white font-semibold">
                  {name}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 md:gap-11">
                <div className="flex items-center gap-2">
                  <img src="./icons/user.svg" alt="gender" />
                  <div className="text-text capitalize">
                    <span>{gender}</span>
                  </div>
                </div>

                {homeName && (
                  <div className="flex items-center gap-2">
                    <img src="./icons/globe.svg" alt="home_world" />
                    <div className="text-text capitalize">
                      <span>{homeName}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap flex-col md:flex-row justify-between">
            <div className="md:basis-1/6 border-b md:border-r md:border-b-0 border-line dark:border-lineDark">
              <div className="text-text font-medium text-base capitalize">
                <span>Height</span>
              </div>

              <div className="text-darkText dark:text-white font-medium text-3xl">
                <span>{height}</span>
              </div>
            </div>

            <div className="md:basis-1/6 border-b md:border-r md:border-b-0 border-line dark:border-lineDark">
              <div className="text-text font-medium text-base capitalize">
                <span>mass</span>
              </div>

              <div className="text-darkText dark:text-white font-medium text-3xl">
                <span>{mass}</span>
              </div>
            </div>

            <div className="md:basis-1/6 border-b md:border-r md:border-b-0 border-line dark:border-lineDark">
              <div className="text-text font-medium text-base capitalize">
                <span>hair color</span>
              </div>

              <div className="text-darkText dark:text-white font-medium text-3xl">
                <span>{hair_color}</span>
              </div>
            </div>

            <div className="md:basis-1/6 border-b md:border-r md:border-b-0 border-line dark:border-lineDark">
              <div className="text-text font-medium text-base capitalize">
                <span>eye color</span>
              </div>

              <div className="text-darkText dark:text-white font-medium text-3xl">
                <span>{eye_color}</span>
              </div>
            </div>

            <div className="md:basis-1/6">
              <div className="text-text font-medium text-base capitalize">
                <span>birth year</span>
              </div>

              <div className="text-darkText dark:text-white font-medium text-3xl">
                <span>{birth_year}</span>
              </div>
            </div>
          </div>
        </SimpleCard>
      </div>
    </section>
  );
};
