var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  var newArray = [element,...array];
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}
function addElementToEndOfArray(array, element) {
  var newArray = [array,...element];
  return newArray;
}
function addElementToEndOfArray(array, element) {
  array.push(element)
  return newArray;
}
//w3schools.com
