import { isProd } from "./util";

/*
 * Note: The testcase itself is quite horrible - please don't write your tests like this.
 * The test is here just to make sure that testing the common package works as well.
 */

describe("util", () => {
  describe("isProd", () => {
    it('is true when process.env.NODE_ENV === "production"', async () => {
      expect(isProd).toBe(process.env.NODE_ENV === "production");
    });
  });
});
