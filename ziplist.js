const alphabets = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

function zipList(list1, list2) {
  let i = 0;
  const retVal = [];
  while (i < list1.length) {
    retVal.push(list1[i]);
    retVal.push(list2[i]);
    i++;
  }
  return retVal;
}

console.log(zipList(alphabets, numbers));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(alphabets, numbers));
