// binarry search algorithmn 




const binarySearch2 = (arr, target) => {
  let low = 0;                 // starting index
  let high = arr.length - 1;   // ending index
  let step = 1;                // to count steps

  console.log("Starting Binary Search...");
  console.log(`Array: [${arr.join(", ")}], Target: ${target}\n`);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2); // middle index
    const guess = arr[mid];                   // middle value

    console.log(`Step ${step++}:`);
    console.log(`   low = ${low}, high = ${high}`);
    console.log(`   mid = ${mid}, guess = ${guess}`);

    if (guess === target) {
      console.log("✅ Target found!");
      console.log(`Target ${target} is at index ${mid}`);
      return mid;              // found target index
    } else if (guess > target) {
      console.log(`   ${guess} > ${target}, searching left side\n`);
      high = mid - 1;          // search left side
    } else {
      console.log(`   ${guess} < ${target}, searching right side\n`);
      low = mid + 1;           // search right side
    }
  }

  console.log("❌ Target not found in array.");
  return -1;                   // not found
};

// Time Complexity: O(log n)
// Space Complexity: O(1)



const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let step = 1;

  console.log("🔍 Starting Binary Search...");
  console.log(`Array: [${arr.join(", ")}]`);
  console.log(`Searching for: ${target}\n`);

  const maxSteps = Math.ceil(Math.log2(arr.length));
  console.log(`📘 Theoretical max steps (log₂(${arr.length})) ≈ ${maxSteps}\n`);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    console.log(`Step ${step}:`);
    console.log(`   Searching between values ${arr[low]} and ${arr[high]}`);
    console.log(`   Middle value is ${guess}`);

    if (guess === target) {
      console.log(`✅ Found the target value ${target}!`);
      console.log(`   It was at position ${mid} in the array.`);
      console.log(`📊 Total Steps Taken: ${step}`);
      console.log(`⏱️ Time Complexity ≈ O(${step === 1 ? '1 (Best Case)' : 'log n'})\n`);
      return mid;
    } 
    else if (guess > target) {
      console.log(`   ${guess} > ${target}, searching LEFT side\n`);
      high = mid - 1;
    } 
    else {
      console.log(`   ${guess} < ${target}, searching RIGHT side\n`);
      low = mid + 1;
    }
    step++;
  }

  console.log(`❌ The value ${target} was not found in the array.`);
  console.log(`📊 Total Steps Taken: ${step - 1}`);
  console.log(`⏱️ Time Complexity ≈ O(log n) (Worst Case)\n`);
  return -1;
};

// ---------------- Example Usage ----------------
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
binarySearch(arr, 7);   // Best / average case
binarySearch(arr, 15);  // Worst case (last element)
binarySearch(arr, 20);  // Worst case (not found)



// Time Complexity: O(log n)
// Space Complexity: O(1)


console.log(binarySearch([1, 3, 5, 7, 8, 11, 13, 15, 17, 19], 19))