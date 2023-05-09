
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
