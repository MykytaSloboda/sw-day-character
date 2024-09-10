import { IFilm } from "@shared/types";
import { MainHeading } from "@shared/ui/utils";
import { CarouselComponent, SimpleCard } from "@shared/ui";

interface IProps {
  films: IFilm[];
}

export const FilmsSection = ({ films }: IProps) => (
  <section className="">
    <div className="container">
      <MainHeading title="films" />

      <CarouselComponent>
        {films.map(({ release_date, title, opening_crawl }) => (
          <SimpleCard>
            <div className="flex flex-col gap-8">
              <div className="text-customGold">
                <span>{release_date}</span>
              </div>

              <div className="font-semibold text-3xl text-darkText dark:text-white">
                <span>{title}</span>
              </div>

              <div className="text-text text-base">
                <span className="line-clamp-6">{opening_crawl}</span>
              </div>
            </div>
          </SimpleCard>
        ))}
      </CarouselComponent>
    </div>
  </section>
);
