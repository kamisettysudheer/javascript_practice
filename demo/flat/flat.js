const isDefined = (element) => element !== undefined;

const flatElement = (element, array) => {
  if (!isDefined(element)) {
    return;
  }
  if (!Array.isArray(element)) {
    return array.push(element);
  }

  for (let i = 0; i < element.length; i++) {
    if (isDefined(element[i])) {
      array.push(element[i]);
    }
  }

  return array;
};

const flatOneLevel = (array) => {
  const flattenArray = [];

  for (let i = 0; i < array.length; i++) {
    flatElement(array[i], flattenArray);
  }

  return flattenArray;
};

export const flatMultilevel = (array, depth) => {
  let flattenArray = [...array];

  for (let i = 0; i < depth; i++) {
    flattenArray = flatOneLevel(flattenArray);
  }

  return [...flattenArray];
};

function testPerformance(arr, depth) {
  console.time("Native flat()");
  arr.flat(depth);
  console.timeEnd("Native flat()");

  console.time("My flat()");
  flatMultilevel(arr, depth);
  console.timeEnd("My flat()");
}

const largeArray = new Array(100000).fill([1, 2, [3, [4, 5]]]);

testPerformance(largeArray, 2);
