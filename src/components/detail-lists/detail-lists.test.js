import { shallow } from "enzyme";
import DetailLists from "./detail-lists.component";
import React from "react";

/**
 * snapshot testing for DetailLists component
 */
it("expect to render DetailLists component", () => {
  const attributesMock = {
    house_trained: true,
    spayed_neutered: true,
    special_needs: false,
  };

  const environmentMock = { cats: true, children: true, dogs: false };
  const wrapper = shallow(
    <DetailLists attributes={attributesMock} environment={environmentMock} />
  );
  expect(wrapper).toMatchSnapshot();
});
