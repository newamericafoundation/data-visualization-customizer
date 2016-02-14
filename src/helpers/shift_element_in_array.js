export default function shiftElementInArray(array, elementIndex, shift) {
  if (shift === -1 && elementIndex < 1) { return [ ...array ] }
  if (shift === +1 && elementIndex > array.length - 2) { return [ ...array ] }
  if (shift === -1) {
    let head = array.slice(0, elementIndex) || []
    let tail = array.slice(elementIndex + 2) || []
    return [ ...head, array[elementIndex + 1], array[elementIndex], ...tail ]
  } else if (shift === +1) {
    let head = array.slice(0, elementIndex - 1) || []
    let tail = array.slice(elementIndex + 1) || []
    return [ ...head, array[elementIndex], array[elementIndex - 1], ...tail ]
  } else {
    return [ ...array ]
  }
}
