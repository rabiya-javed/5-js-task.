const startYear = parseInt(prompt('Please enter a starting year:'));
let count = 0;

for (let year = startYear; count < 10; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert(year);
    count++;
  }
}
