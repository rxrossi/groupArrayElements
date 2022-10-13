export function groupArrayElements(
  array: Array<number>,
  lengthOfEachGroup: number
): Array<Array<number>> {
  let res = [];

  for (let i = 0; i < array.length; i += lengthOfEachGroup) {
    res.push(array.slice(i, i + lengthOfEachGroup));
  }

  return res;
}
