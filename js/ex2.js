const myArray = [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 10]
console.log(`Starting array: ${myArray}`)


const oddOnes = myArray.filter(x => x%2 != 0);
console.log(`Odd ones: ${oddOnes}`)

const div2or5 = myArray.filter(x => x%2 == 0 || x%5 == 0);
console.log(`Divisible by 2 or 5: ${div2or5}`)

const divby3sq = myArray.filter(x => x%3 == 0).map(x => x**2);
console.log(`Divisible by 3 squared: ${divby3sq}`)

const lastone = myArray.filter(x => x%5 == 0).reduce((acc, value) => acc + value, 0);
console.log(`Sum of the square the numbers divisible by 5: ${lastone}`)