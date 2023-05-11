 

# JavaScript Bubble Sort Algorithm with Visual Representation

This is an implementation of the bubble sort algorithm in JavaScript, with a visual representation of the sorting process using ASCII art.

## Description

The bubble sort algorithm is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.

This implementation of the algorithm includes a visual representation of the sorting process using ASCII art. The representation is a bar chart that shows the height of each number in the array. The chart is created by printing out solid blocks (`█`) for each unit of height in the array.

## Usage

To use this implementation of the algorithm

 ### clone this repo -
```git clone https://github.com/deepthapliyal/JavaScript-Bubble-Sort-Algorithm-with-Visual-Representation.git```
### Open in your text editor 
run 
```npm init ```
``` node index.js```

The code will generate a random array of numbers, sort the array using the bubble sort algorithm, and display the sorted array and the visual representation of the sorting process.

## Example

```

let a = [35, 42, 22, 13, 11, 28, 18, 5, 40, 9];

let n = a.length;

let max = Math.max(...a);

console.log('Original array:', a.join(' '));

console.log('='.repeat(n * 4));

for (let i = 0; i < n; i++) {

  for (let j = i + 1; j < n; j++) {

    if (a[i] > a[j]) {

      // swapping elements

      let temp = a[i];

      a[i] = a[j];

      a[j] = temp;

    }

    console.clear();

    console.log('Sorted array:', a.join(' '));

    console.log('='.repeat(n * 4));

    for (let k = max; k > 0; k--) {

      let line = '';

      for (let l = 0; l < n; l++) {

        if (a[l] >= k) {

          line += '█ ';

        } else {

          line += '  ';

        }

      }

      console.log(line);

    }

    console.log('='.repeat(n * 4));

  }

}

```

## License

This code is licensed under the [MIT License](https://opensource.org/licenses/MIT).
