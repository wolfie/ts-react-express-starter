import { getTestMessage } from "./testMessage";

describe("testMessageController", () => {
  it("should send a message in JSON", () => {
    expect(getTestMessage()).resolves.toHaveProperty("message");
  });
});
