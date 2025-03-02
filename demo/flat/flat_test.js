import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import { flatMultilevel } from "./flat.js";

describe("flatMultiLevel", () => {
  it("should flat the single level nested array", () => {
    const arr = [1, [2, 3], 4];
    const depth = 1;
    const expectedOutput = [1, 2, 3, 4];
    assertEquals(flatMultilevel(arr, depth), expectedOutput);
  });

  it("should flat the multi level nested array", () => {
    const arr = [1, [2, [3, 4]], 5];
    const depth = 2;
    const expectedOutput = [1, 2, 3, 4, 5];
    assertEquals(flatMultilevel(arr, depth), expectedOutput);
  });

  it("should flat the fully nested array", () => {
    const arr = [[[[1]]], 2, [[3, 4]], 5];
    const depth = 3; //infinity
    const expectedOutput = [1, 2, 3, 4, 5];
    assertEquals(flatMultilevel(arr, depth), expectedOutput);
  });

  it("should flat the Array Containing Empty Slots", () => {
    const arr = [1, , [2, , [3, , 4]]];
    const depth = 2;
    const expectedOutput = [1, 2, 3, 4];
    assertEquals(flatMultilevel(arr, depth), expectedOutput);
  });

  it("should flat the Array Containing Non-Arrays", () => {
    const arr = [1, "a", [true, null], [{ key: "value" }]];
    const depth = 1;
    const expectedOutput = [1, "a", true, null, { key: "value" }];
    assertEquals(flatMultilevel(arr, depth), expectedOutput);
  });

  it("should flat the Empty Arrays", () => {
    const arr = [[], [], []];
    const depth = 1;
    const expectedOutput = [];
    assertEquals(flatMultilevel(arr, depth), expectedOutput);
  });

  it("should flat the No Nested Arrays", () => {
    const arr = [1, 2, 3];
    const depth = 1;
    const expectedOutput = [1, 2, 3];
    assertEquals(flatMultilevel(arr, depth), expectedOutput);
  });

  it("should flat the Already Flat Arrays", () => {
    const arr = [1, 2, 3];
    const depth = 2;
    const expectedOutput = [1, 2, 3];
    assertEquals(flatMultilevel(arr, depth), expectedOutput);
  });

  it("should flat the Large Nested Arrays", () => {
    const arr = new Array(10000).fill([1, 2, [3]]);
    const depth = 2;
    const expectedOutput = new Array(10000).fill([1, 2, 3]).flat();
    assertEquals(flatMultilevel(arr, depth), expectedOutput);
  });
});
