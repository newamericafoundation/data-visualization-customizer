export default function shiftElementInArray(array, elementIndex, shift) {
  var newArray = [ ...array ]
  if (shift === -1 && elementIndex < 1) { return newArray }
  if (shift === +1 && elementIndex > array.length - 2) { return newArray }

  if (shift === -1) {
    let a = newArray[elementIndex]
    newArray[elementIndex] = newArray[elementIndex - 1]
    newArray[elementIndex - 1] = a
    return newArray
  } else if (shift === +1) {
    let a = newArray[elementIndex]
    newArray[elementIndex] = newArray[elementIndex + 1]
    newArray[elementIndex + 1] = a
    return newArray
  } else {
    return newArray
  }
}
