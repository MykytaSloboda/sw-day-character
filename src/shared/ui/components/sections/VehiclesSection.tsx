import { IVehicle } from "@shared/types";
import { MainHeading } from "@shared/ui/utils";
import { CardWithTitle, CarouselComponent } from "@shared/ui";

interface IProps {
  vehicles: IVehicle[];
}

export const VehiclesSection = ({ vehicles }: IProps) =>
  vehicles.length > 0 && (
    <section className="pb-10">
      <div className="container">
        <MainHeading title="vehicles" />

        <CarouselComponent>
          {vehicles.map(({ name, model, manufacturer }) => (
            <CardWithTitle title={name} key={name}>
              <div className="flex flex-col gap-1">
                <div className="font-semibold text-2xl capitalize text-darkText dark:text-white">
                  <span>{model}</span>
                </div>

                <div className="text-text capitalize"><span>{manufacturer}</span></div>
              </div>
            </CardWithTitle>
          ))}
        </CarouselComponent>
      </div>
    </section>
  );
