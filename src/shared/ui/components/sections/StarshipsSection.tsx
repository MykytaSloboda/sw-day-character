import { IStarship } from "@shared/types";
import { MainHeading } from "@shared/ui/utils";
import { CardWithTitle, CarouselComponent } from "@shared/ui";

interface IProps {
  starships: IStarship[];
}

export const StarshipsSection = ({ starships }: IProps) =>
  starships.length > 0 && (
    <section className="pb-10">
      <div className="container">
        <MainHeading title="starships" />

        <CarouselComponent>
          {starships.map(({ name, model, manufacturer }) => (
            <CardWithTitle title={name} key={name}>
              <div className="flex flex-col gap-1">
                <div className="font-semibold text-2xl capitalize text-darkText dark:text-white">
                  <span>{model}</span>
                </div>

                <div className="text-text capitalize">
                  <span>{manufacturer}</span>
                </div>
              </div>
            </CardWithTitle>
          ))}
        </CarouselComponent>
      </div>
    </section>
  );
