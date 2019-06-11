import * as React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  beforeEach(() => {});

  it("should render a heading and a paragraph", () => {
    const app = shallow(<App />);
    expect(app.find("h1").exists()).toBeTruthy();
    expect(app.find("p").exists()).toBeTruthy();
  });
});
