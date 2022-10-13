import { groupArrayElements } from "../groupArrayElements";

describe("groupArrayElements", () => {
  describe("Given an array of length >= 0 and a positive integer N", () => {
    describe("When the array is equally divisible by N", () => {
      test("returns the contents of the array divided into N equally sized arrays", () => {
        const array = [1, 2, 3, 4, 5, 6];
        const N = 3;

        const res = groupArrayElements(array, N);

        expect(res).toEqual([
          [1, 2, 3],
          [4, 5, 6],
        ]);
      });
    });

    describe("When the array is not equally divisible by N", () => {
      test("the final part should have a length equal to the remainder", () => {
        const array = [1, 2, 3, 4];
        const N = 3;

        const res = groupArrayElements(array, N);

        expect(res).toEqual([[1, 2, 3], [4]]);
      });
    });
  });
});
