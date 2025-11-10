//make a function with arr and target parameter
//take a Map()
//start a for loop on arr
  //take current number
  // make compliment with  target - currentNumber
  // check compliment number in MAp() if has then return compliment value index and actual index
     // if not found then set value of current number and his index
//if not found anything form loop ret7urn undefined


// ex : nums = [1, 4, 6, 2, 5]
// target = 8

const twoSum = (arr, target) => {
  const newMap = new Map();
  console.log("Target:", target);
  console.log("Array:", arr);

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const compliment = target - currentNumber;

    console.log(`\nIndex: ${i}`);
    console.log(`Current Number: ${currentNumber}`);
    console.log(`Compliment (target - current): ${compliment}`);
    console.log("Map so far:", newMap);

    if (newMap.has(compliment)) {
      console.log(
        `Match found! ${currentNumber} + ${compliment} = ${target}`
      );
      return [newMap.get(compliment), i];
    } else {
      newMap.set(currentNumber, i);
      console.log(`Added ${currentNumber} with index ${i} to map`);
    }
  }

  console.log("No pair found that adds up to target");
  return undefined;
};

// Example test
console.log("Result:", twoSum([2, 7, 11, 15], 9));
