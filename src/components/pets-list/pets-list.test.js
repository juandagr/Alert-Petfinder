import { shallow } from "enzyme";

import PetList from "./pets-list.component";
import React from "react";

/**
 * snapshot testing for PetCard component
 */
it("expect to render PetCard component", () => {
  const petsMock = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const wrapper = shallow(<PetList pets={petsMock} />);
  expect(wrapper).toMatchSnapshot();
});
