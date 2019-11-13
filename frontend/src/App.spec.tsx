import * as React from "react";
import { shallow } from "enzyme";
import App from "./App";
import "jest-enzyme";

describe("<App>", () => {
  beforeEach(() => {});

  it("should render a heading and a paragraph", () => {
    const app = shallow(<App />);
    const heading = app.find("h1");
    const paragraph = app.find("p");
    expect(heading).toExist();
    expect(paragraph).toExist();
  });
});
