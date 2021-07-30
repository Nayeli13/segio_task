export default function RemoveDuplicateElemetnsOfArray<T>(array: any[], target: any = '') {
  const cleanObject = {} as any;
  let targetArray = [];
  for (let index = 0; index < array.length; index++) {
    const targetPos = array[index][target];
    cleanObject[targetPos] = array[index];
  }
  for (const iterator in cleanObject) {
    if (iterator !== null) {
      targetArray.push(cleanObject[iterator]);
    }
  }
  return targetArray as T[];
}
