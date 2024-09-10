import { IChildrenProps } from "@shared/types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CarouselComponent = ({ children }: IChildrenProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} arrows={false} itemClass="md:mr-8">
        {children}
    </Carousel>
  );
};
