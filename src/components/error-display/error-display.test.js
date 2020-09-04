import { shallow } from "enzyme";
import ErrorDisplay from "./error-display.component";
import React from "react";

/**
 * snapshot testing for ErrorDisplay component
 */
it("expect to render ErrorDisplay component", () => {
  const wrapper = shallow(<ErrorDisplay />);
  expect(wrapper).toMatchSnapshot();
});
