import { shallow } from "enzyme";
import CarouselDetails from "./carousel.component";
import React from "react";

/**
 * snapshot testing for CarouselDetails component
 */
it("expect to render CarouselDetails component", () => {
  const photosMock = [
    {
      large: "largephoto",
    },
    {
      large: "largephoto",
    },
    {
      large: "largephoto",
    },
  ];

  const wrapper = shallow(
    <CarouselDetails photos={photosMock} status={"adoptable"} />
  );
  expect(wrapper).toMatchSnapshot();
});
