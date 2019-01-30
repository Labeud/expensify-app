import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";

let wrapper, startLogout;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout} />);
});

test("should render Header correctly", () => {
  expect(wrapper).toMatchSnapshot();

  // const renderer = new ReactShallowRender();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test("should startLogout on button click", () => {
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
});