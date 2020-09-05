import React from "react";
import App from "./App";
import { shallow } from "enzyme";

/**
 * tests for App component
 */
it("expect to render PetCard component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
